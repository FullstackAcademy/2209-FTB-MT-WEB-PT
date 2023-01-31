const { dropAndCreateTables, client, createUser } = require('./db')
const bcrypt = require('bcrypt')

const run = async () => {
  try {
    await client.connect()
    await dropAndCreateTables()

    // demo

    const user = {
      username: "Wade Lubowitz Jr.",
      password: "password123"
    }

    const hashedPassword = await bcrypt.hash(user.password, 10)

    const createdUser = await createUser({
      username: user.username,
      password: hashedPassword
    })

    console.log('createdUser: ', createdUser)

    const passwordIsValid = await bcrypt.compare('password123', createdUser.password)
    console.log('passwordIsValid :>> ', passwordIsValid);

  } catch (err) {
    console.log("error: ", err)
  } finally {
    await client.end()
  }
}

run()
