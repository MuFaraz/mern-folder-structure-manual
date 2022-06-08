// const { MongoClient, ServerApiVersion } = require('mongodb');
const { dbConnection, ObjectId } = require("../database/connection.js");
// const uri = "mongodb+srv://faraz:Adobe110@cluster0.i9hdb.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

exports.index = (req, res) => {
  client.connect(async (err) => {
    if (err) throw err;
    const userCollections = client.db("myDB").collection("UserCollection");
    await userCollections.insertOne({ name: "faraz" }, (err, result) => {
      if (err) throw err;
      if (result.acknowledged) {
        console.log("add");
        // res.render("login");
      } else {
        console.log("not insert");
        // res.render("login");
      }
    });
    // client.close()
  });

  res.render("login");
};

exports.add = (req, res) => {
  res.render("add");
};
exports.insert = (req, res) => {
  console.log(req.body);
  dbConnection().then(async function (client) {
    const productCollections = client
      .db("myDB")
      .collection("ProductCollection");

    await productCollections.insertOne(req.body, (err, result) => {
      if (err) throw err;
      if (result.acknowledged) {
        res.render("add", { product: result, success: true });
        // res.render("login");
      } else {
        res.render("add", { product: result, success: false });
      }
    });
  });
};
exports.edit = (req, res) => {
  dbConnection().then(async function (client) {
    const productCollections = client
      .db("myDB")
      .collection("ProductCollection");
    await productCollections
      .find({ _id: new ObjectId(req.params.id) })
      .toArray((err, result) => {
        if (err) throw err;

        console.log("sadas", result);
        res.render("edit", { product: result[0] });
      });
  });
};
exports.update = (req, res) => {
  dbConnection().then(async function (client) {
    const productCollections = client
      .db("myDB")
      .collection("ProductCollection");
    await productCollections.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { name: req.body.name, price: req.body.price } },
      (err, result) => {
        if (err) throw err;
        if (result.acknowledged) {
          res.redirect("/view");
          // res.render("login");
        } else {
          res.redirect("/view");
        }
        // console.log(result.updatedCount + ' document updated successfully!');
        // res.redirect('/items');
      }
    );
    // await productCollections.find({}).toArray( (err, result) => {
    //   if (err) throw err;
    //   if (result.acknowledged) {
    //     res.render("view", { product: result});
    //     // res.render("login");
    //   } else {
    //     res.render("view", { product: result});
    //   }
    // });
  });
};
exports.view = (req, res) => {
  dbConnection().then(async function (client) {
    const productCollections = client
      .db("myDB")
      .collection("ProductCollection");

    await productCollections.find({}).toArray((err, result) => {
      if (err) throw err;
      if (result.acknowledged) {
        res.render("view", { product: result });
        // res.render("login");
      } else {
        res.render("view", { product: result });
      }
    });
  });
};


exports.delete = (req, res) => {
    dbConnection().then(async function (client) {
      const productCollections = client
        .db("myDB")
        .collection("ProductCollection");
  
        await productCollections.deleteOne({_id:new ObjectId(req.params.id)}, (err, result) => {  if (err) throw err;
        if (result.acknowledged) {
          res.redirect("/view");
          // res.render("login");
        } else {
          res.redirect("/view");
        }
      });
    });
  };
