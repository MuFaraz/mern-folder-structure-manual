
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://faraz:Adobe110@cluster0.i9hdb.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 

exports.index = (req, res) => {


    
    client.connect(async(err) => {
        if(err) throw err;
            const userCollections = client.db('myDB').collection('UserCollection')
            await userCollections.insertOne({name:"faraz"},(err,result)=>{
                if (err) throw err;
                    if(result.acknowledged){
                        console.log("add")
                        // res.render("login");
                    }
                    else{
                        console.log("not insert")
                        // res.render("login");
                    }

            })
            // client.close()

    });    
    
    res.render("login");
};

exports.add = (req, res) => {
    res.render("add");
};
exports.insert = (req, res) => {
    console.log("hello world")
    client.connect(async(err) => {
        if(err) throw err;
            const userCollections = client.db('myDB').collection('productCollection')
            await userCollections.insertOne(req.body,(err,result)=>{
                if (err) throw err;
                    if(result.acknowledged){
                        console.log("add")
                        res.render("add");
                    }
                    else{
                        res.render("add");
                        console.log("not insert")
                        // res.render("login");
                    }

            })
            // client.close()

    });
};
exports.edit = (req, res) => {
    res.render("edit");
};
exports.view = (req, res) => {
    res.render("view");
};
