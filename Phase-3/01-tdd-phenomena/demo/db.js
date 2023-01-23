// Require the Client constructor from the pg package
const { Client } = require('pg');
// Create a constant, CONNECTION_STRING, from either process.env.DATABASE_URL or postgres://localhost:5432/user-tests
const CONNECTION_STRING = process.env.DATABASE_URL || 'postgres://localhost:5432/user-tests';
// Create the client using new Client(CONNECTION_STRING)
const client = new Client(CONNECTION_STRING);
// Do not connect to the client in this file!

// seed data, do not remove
const users = [{name: 'Zanzibar Buck'}, {name: 'Chris P. Bacon'}, {name: 'Lord Voldemort'}];

// db initialization, do not remove
const createTable = async () => {
  await client.query(`
  DROP TABLE IF EXISTS users;
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  );
  `);
}

async function createUser(user) {
    // Get the field from the passed in object
    const { name } = user

    try {
      // insert the correct field into the users table
      // remember to return the new row from the query
      const {rows: [userCreated]} = await client.query(`
        INSERT INTO users (name) VALUES ($1)
        RETURNING *
      `, [name]);
  
      // return the new user
     // return {id: 1, name: 'foo'};
      return userCreated;
  
    } catch (error) {
      throw error;
    }
}

const getUserById = async (id) => {
  try {
    // SELECT the user with id equal to id
    const {rows} = await client.query(`
      SELECT * FROM users
      WHERE id=$1;
    `, [id]);
    const user = rows[0];
    // return the user
    return user;
  } catch (error) {
    console.log('error: ', error);
  }
}

// export the client, users, and all database functions below
module.exports = {
  client,
  users,
  createTable,
  getUserById,
  createUser
}