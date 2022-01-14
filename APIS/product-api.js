const exp=require("express")
const productApi=exp.Router();
const expressErrorHandler = require("express-async-handler")

const multerObj = require("./middlewares/multerCloudinary")

//adding new product
productApi.use(exp.json())
productApi.post('/add-product', multerObj.single('photo'), expressErrorHandler(async (req, res, next) => {



    let productCollectionObject = req.app.get("productCollectionObject")

    let newProduct = JSON.parse(req.body.prodObj);
   // console.log(newProduct)

    //search
    let product = await productCollectionObject.findOne({ name: newProduct.name })

    //if proudct is existed
    if (product !== null) {
        res.send({ message: "Movie already existed" })
    }
    else {
        newProduct.productImage = req.file.path;
        delete newProduct.photo;
        await productCollectionObject.insertOne(newProduct)
        res.send({ message: "New Movie added" })
    }


}))

//to read all products
productApi.get("/getproducts", expressErrorHandler(async (req, res, next) => {

    let productCollectionObject = req.app.get("productCollectionObject")

    let products = await productCollectionObject.find().toArray()
    console.log("hello")
    res.send({ message: products })

}))

productApi.get("/getproducts/:id", expressErrorHandler(async (req, res, next) => {

    let productCollectionObject = req.app.get("productCollectionObject")

    let un = req.params.id;
    console.log(un)

    let products = await productCollectionObject.find().toArray()
    // let first=userProdObj[Object.keys(userProdObj)[0]]
    //console.log(products)
    for (let key in products){
        let obj = products[key];
        
        if(obj.name===un){
            console.log(obj)
            res.send({ message: obj })
        }
    }
    
      
  
    

}))









module.exports=productApi;