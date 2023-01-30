const { Client } = require("pg");

const CONNECTION_STRING =
  process.env.CONNECTION_STRING || "postgres://localhost:5432/hashing-demo";

const client = new Client(CONNECTION_STRING);

const dropAndCreateTables = async () => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS users;
    `)
    await client.query(`
      CREATE TABLE users(
        id  SERIAL PRIMARY KEY, 
        username VARCHAR(255) UNIQUE NOT NULL, 
        password VARCHAR(255) NOT NULL
      );
    `);
  } catch (error) {
    console.log('error: ', error);
  }
}

const createUser = async ({ username, password}) => {
  try {
    const {rows: [user]} = await client.query(`
      INSERT INTO users(username, password) VALUES ($1, $2)
      ON CONFLICT (username) DO NOTHING 
      RETURNING *
    `, [username, password]);
    return user;
  } catch (error) {
    throw error;
  }
}


module.exports = {
  client,
  dropAndCreateTables,
  createUser,
};