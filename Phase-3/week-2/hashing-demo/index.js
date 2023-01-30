const { dropAndCreateTables, client, createUser } = require('./db')

const run = async () => {
  try {
    await client.connect()
    await dropAndCreateTables()

    // demo




  } catch (err) {
    console.log("error: ", err)
  } finally {
    await client.end()
  }
}

run()
