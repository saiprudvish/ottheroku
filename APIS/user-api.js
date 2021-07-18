//create mini express app
const exp = require('express')
const userApi = exp.Router();
const jwt=require("jsonwebtoken")

const expressErrorHandler = require("express-async-handler")
const bcryptjs=require("bcryptjs")
//body parsing middlleware
userApi.use(exp.json())

const multerObj=require("./middlewares/multerCloudinary")

require("dotenv").config()


const checkToken=require("./middlewares/verify-token");
const expressAsyncHandler = require('express-async-handler');


//http://localhost:3000/user/getusers
//get users
userApi.get("/getusers", expressErrorHandler(async (req, res) => {
   
    let userCollectionObj = req.app.get("userCollectionObj")
    let userList = await userCollectionObj.find().toArray()
    res.send({ message: userList })

}))


//get user by username
userApi.get("/getuser/:username", expressErrorHandler(async (req, res, next) => {
      
    let userCollectionObj = req.app.get("userCollectionObj")
    //get username from url
    let un = req.params.username;
    //search
    let userObj = await userCollectionObj.findOne({ username: un })

    if (userObj === null) {
        res.send({ message: "User not existed" })
    }
    else {
        res.send({ message: userObj })
    }
}))

//http://localhost:3000/user/createuser
//create user
userApi.post("/createuser",multerObj.single('photo'),expressErrorHandler(async (req, res, next) => {

    let userCollectionObj = req.app.get("userCollectionObj")
    //get user obj
    let newUser = JSON.parse(req.body.userObj)

    //search for existing user
    let user = await userCollectionObj.findOne({ username: newUser.username })
    //if user existed
    if (user !== null ) {
        res.send({ message: "User already existed" })
    }
    else if(newUser.password!=newUser.retypepassword ){
        res.send({message:"password not matched"})

    }
    else if(newUser.agree!=true){
        res.send({message:"please agree to Register"})
    }
 
    else{
         //hash password
        let hashedPassword = await bcryptjs.hash(newUser.password, 7)
        let hashedRPassword = await bcryptjs.hash(newUser.retypepassword, 7)
        //replace password
         newUser.password = hashedPassword;
         newUser.retypepassword=hashedRPassword
         //add image URL
         newUser.profileImage=req.file.path;
        
        //insert
        await userCollectionObj.insertOne(newUser)
        res.send({ message: "User created" })
    }
  
}))

//http://localhost:3000/user/updateuser/<username>

userApi.put("/updateuser/:username", expressErrorHandler(async (req, res, next) => {

    let userCollectionObj = req.app.get("userCollectionObj")

    //get modified user
    let modifiedUser = req.body;
    //update
    await userCollectionObj.updateOne({ username: modifiedUser.username }, { $set: { ...modifiedUser } })
    //send res
    res.send({ message: "User modified" })

}))


//delete user
userApi.delete("/deleteuser/:username", expressErrorHandler(async (req, res) => {

    let userCollectionObj = req.app.get("userCollectionObj")

    //get username from url
    let un = req.params.username;
    //find the user
    let user = await userCollectionObj.findOne({ username: un })

    if (user === null) {
        res.send({ message: "User not existed" })
    }
    else {
        await userCollectionObj.deleteOne({ username: un })
        res.send({ message: "user removed" })
    }
}))

//user login
userApi.post('/login', expressErrorHandler(async (req, res) => {

    let userCollectionObj = req.app.get("userCollectionObj")

    //get user credetials
    let credentials = req.body;
    //search user by username
    let user = await userCollectionObj.findOne({ username: credentials.username })
    //if user not found
    if (user === null) {
        res.send({ message: "invalid username" })
    }
    else {
        //compare the password
        let result = await bcryptjs.compare(credentials.password, user.password)
        //if not matched
        if (result === false) {
            res.send({ message: "Invalid password" })
        }
        else {
            //create a token
            let signedToken =  jwt.sign({ username: credentials.username }, process.env.SECRET, { expiresIn: 10 })
            //send token to client
            res.send({ message: "login success", token: signedToken,username: credentials.username ,userObj:user })
        }

    }

}))
// //delete from cart
// userApi.post("/delcart", expressErrorHandler(async (req, res) => {

//     let userCollectionObj = req.app.get("userCollectionObj")

//     //get username from url
//     let deletedObj = req.body;
//     console.log(deletedObj)
//     //find the user
//     //let user = await userCollectionObj.findOne({ username: un })

//     await userCollectionObj.update({username:newProdObject.username , {$pull: {name: }});

//         await userCollectionObj.deleteOne({ productObject: deletedObj })
//         res.send({ message: "Product removed" })
    
// }))

//add to cart
userApi.post("/add-to-cart", expressErrorHandler(async (req, res, next) => {

    let userCartCollectionObject = req.app.get("userCartCollectionObject")

    let newProdObject = req.body;
 //console.log(newProdObject.productObject)

    //find usercartcollection 
    let userCartObj = await userCartCollectionObject.findOne({ username: newProdObject.username })
 // console.log(userCartObj)
    //if userCartObj is not existed
    if (userCartObj === null) {

        //create new object
        let products = [];
       // let name=[];
       
        products.push(newProdObject.productObject)
       
    
        //names.push(newProdObject.productObject.name)
        //console.log(newProdObject.productObject.name)
        //console.log(names)
        // for( var i = 0; i < products.length; i++){ 
    
        //     if ( products[i].pr=== ) { 
        
        //         arr.splice(i, 1); 
        //     }
        
        // }

        let newUserCartObject = { username: newProdObject.username, products }

        //insert it

        await userCartCollectionObject.insertOne(newUserCartObject)

        let latestCartObj = await userCartCollectionObject.findOne({ username: newProdObject.username })
        res.send({ message: "New movie Added", latestCartObj: latestCartObj })

    }
    //if existed
    else {
  // console.log(newProdObject.productObject.name)
             //console.log(userCartObj.products)
             let ispresent=false;
             for (let i = 0; i < userCartObj.products.length; i++)
             {
                if(userCartObj.products[i].name===newProdObject.productObject.name)
                {
                    ispresent=true;
                    res.send({message:"movie already there in list"})
                }
             }
             if(ispresent===false)
           { 
           userCartObj.products.push(newProdObject.productObject)
           await userCartCollectionObject.updateOne({ username: newProdObject.username }, { $set: { ...userCartObj } })
           let latestCartObj = await userCartCollectionObject.findOne({ username: newProdObject.username })
           res.send({ message: "New movie Added", latestCartObj: latestCartObj })
           }
             
      
      
    }




}))
//add to cart
userApi.post("/add-to-watch", expressErrorHandler(async (req, res, next) => {

    let userWatchCollectionObject = req.app.get("userWatchCollectionObject")

    let newProdObject = req.body;
//   console.log(newProdObject.productObject.name)

    //find usercartcollection 
    let userCartObj = await userWatchCollectionObject.findOne({ username: newProdObject.username })
 // console.log(userCartObj)
    //if userCartObj is not existed
    if (userCartObj === null) {

        //create new object
        let products = [];
       // let name=[];
       
        products.push(newProdObject.productObject)
       
    
        //names.push(newProdObject.productObject.name)
        //console.log(newProdObject.productObject.name)
        //console.log(names)
        // for( var i = 0; i < products.length; i++){ 
    
        //     if ( products[i].pr=== ) { 
        
        //         arr.splice(i, 1); 
        //     }
        
        // }

        let newUserCartObject = { username: newProdObject.username, products }

        //insert it
        await userWatchCollectionObject.insertOne(newUserCartObject)

        let latestCartObj = await userWatchCollectionObject.findOne({ username: newProdObject.username })
        res.send({ message: "New movie Added", latestCartObj: latestCartObj })

    }
    //if existed
    else {
   //console.log(userCartObj.products.name)
             //console.log(c)
             let ispresent=false;
             for (let i = 0; i < userCartObj.products.length; i++)
             {
                if(userCartObj.products[i].name===newProdObject.productObject.name)
                {
                    ispresent=true;
                    res.send({message:"movie already there in list"})
                }
             }
             if(ispresent===false){
        userCartObj.products.push(newProdObject.productObject)
             //update document
             await userWatchCollectionObject.updateOne({ username: newProdObject.username }, { $set: { ...userCartObj } })
             let latestCartObj = await userWatchCollectionObject.findOne({ username: newProdObject.username })
             res.send({ message: "New movie Added", latestCartObj: latestCartObj })
             }
             
      
   
    }





}))
// userApi.post("/delcart" ,  expressErrorHandler(async (req, res, next) => {
//     let userCartCollectionObject = req.app.get("userCartCollectionObject")

//     let newProdObject = req.body;
//     //console.log(newProdObject)

//   //find usercartcollection 
//   let userCartObj = await userCartCollectionObject.findOne({ username: newProdObject.username })
 

//   //if userCartObj is not existed
//   if (userCartObj!=null) {
//      await userCartCollectionObject.deleteOne({ productObject: newProdObject.productObject })
//     //console.log(deletedobj)
//     // let latestCartObj = await userCartCollectionObject.findOne({ username: newProdObject.username })
//         res.send({ message: "deleted"})
//    //update document
//    await userCartCollectionObject.updateOne({ username: newProdObject.username }, { $set: { ...userCartObj } })
//    let latestCartObj = await userCartCollectionObject.findOne({ username: newProdObject.username })
//    res.send({ message: "New product Added", latestCartObj: latestCartObj })
//     //   //update document
//     //   await userCartCollectionObject.updateOne({ username: newProdObject.username }, { $set: { ...userCartObj } })
//     //   let latestCartObj = await userCartCollectionObject.findOne({ username: newProdObject.username })
//     //   res.send({ message: "product deleted", latestCartObj: latestCartObj })

//   }





// }))


//get products from user cart
userApi.get("/getproducts/:username", expressErrorHandler(async (req, res, next) => {

    let userCartCollectionObject = req.app.get("userCartCollectionObject")

    let un = req.params.username;

    let userProdObj = await userCartCollectionObject.findOne({ username: un })

    if (userProdObj === null) {
        res.send({ message: "Watchlist-empty" })
    }
    else {
        res.send({ message: userProdObj })
    }

}))

//get products from user cart
userApi.get("/getwatchs/:username", expressErrorHandler(async (req, res, next) => {

    let userWatchCollectionObject = req.app.get("userWatchCollectionObject")

    let un = req.params.username;

    let userProdObj = await userWatchCollectionObject.findOne({ username: un })

    if (userProdObj === null) {
        res.send({ message: "Watched-empty" })
    }
    else {
        res.send({ message: userProdObj })
    }

}))



//dummy route to create protected resource
userApi.get("/testing",checkToken,(req,res)=>{
    res.send({message:"This is protected data"})
})










//export
module.exports = userApi;