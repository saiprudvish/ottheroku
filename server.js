//create express app
const exp = require("express")
const app = exp();
const path = require("path")

//connect angular app with express server
app.use(exp.static(path.join(__dirname, './dist/angular/')))

//import APIS
const userApi = require("./APIS/user-api")
const adminApi = require('./APIS/admin-api')
const productApi = require("./APIS/product-api")
//import mongoclient
const mc=require("mongodb").MongoClient
require("dotenv").config()


//connection string
const databaseUrl=process.env.DATABASE_URL;


//connect to DB
mc.connect(databaseUrl, {useNewUrlParser:true,  useUnifiedTopology: true}, (err, client) => {

    if (err) {
        console.log("err in db connection", err);
    }
    else {
        //get database object
        let databaseObj = client.db("prudvishdb1")
        //create collection object
    let  userCollectionObj= databaseObj.collection("usercollection")
    let  productCollectionObject=databaseObj.collection("productcollection")
    let  userCartCollectionObject=databaseObj.collection("usercartcollection")
    let  userWatchCollectionObject=databaseObj.collection("userwatchcollection")
    app.set("userCollectionObj",userCollectionObj)
    app.set("productCollectionObject",productCollectionObject)
    app.set("userCartCollectionObject",userCartCollectionObject)
    app.set("userWatchCollectionObject",userWatchCollectionObject)

        console.log("connected to database")

    }
})






//execute specific api based on path
app.use("/user", userApi)
app.use("/admin", adminApi)
app.use("/product",productApi)
//invalid path
app.use((req, res, next) => {

    res.send({ message: `path ${req.url} is invalid` })
})

//error handling middleware
app.use((err, req, res, next) => {
    res.send({ message: `error is ${err.message}` })
})


//assign port
const port = process.env.PORT ||8080;
app.listen(port, () => console.log(`server on ${port}...`))