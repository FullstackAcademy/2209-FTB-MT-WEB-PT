const {
  client,
  users,
  createTable,
  getUserById,
  createUser
} = require('./db');

describe('db adapters', () => {
  let createdUsers;
  let testUser;
  let user;
  beforeAll(async () => {
    await client.connect();
    await createTable();
    (createdUsers = await Promise.all(users.map(createUser)));
    user = await getUserById(1);
  });
  afterAll(async () => {
    await client.end();
  })
  describe('createUser', () => {
    it('Returns an object', async () => {
      ([testUser] = createdUsers);
      expect(typeof testUser).toBe('object');
    });
    it('user object contains id and name', async () => {
      expect(testUser).toEqual(expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
      }));
    });
  })
  describe('getUserById', () => {
    
    it('returns a user with the id matching that passed in', async () => {
      expect(user.id).toBe(1);
    });
    it('returns a name for the user', async () => {
      expect(user).toEqual(expect.objectContaining({
        name: expect.any(String),
      }));
    });
    it('returns the correct name', async () => {
      expect(user.name).toBe('Zanzibar Buck');
    });
  });
});