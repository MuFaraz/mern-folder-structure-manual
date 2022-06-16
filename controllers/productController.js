const { dbConnection, ObjectId } = require("../database/connection.js");
// const Product = require('../models/product.model')
exports.index = (req, res) => {
  res.render("login");
};

exports.add = (req, res) => {
  res.render("add");
};
exports.insert = (req, res) => {
  
//   const new_product = new Product({
//     name:req.body.name,
//     price:req.body.price
//   })
//   new_product.save(function(err,result){
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(result)
//     }
// })
  dbConnection().then(async function (client) {
    const productCollections = client
      .db("myDB")
      .collection("ProductCollection");
    await productCollections.insertOne(req.body, (err, result) => {
      if (err) throw err;
      if (result.acknowledged) {
        res.render("add", { product: result, success: true });
        
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
        } else {
          res.redirect("/view");
        }
     
      }
    );
 
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
        res.status(200).send({product:result});
        // res.render("view", { product: result });
        // res.render("login");
      } else {
        res.status(200).send({product:result});
        // res.render("view", { product: result });
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
