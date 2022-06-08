const { MongoClient, ObjectId } = require("mongodb");
const dbConnection = async function () {
  const client = new MongoClient(process.env.MONGO_URI);
  try {
    await client.connect();

  } catch (err) {
    console.log(err);
  } finally {
    // await client.close();
  }
  return client
};

// module.exports = dbConnection();
module.exports = { dbConnection,ObjectId };
