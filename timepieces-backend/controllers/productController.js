const { uuid } = require("uuidv4")
const Product = require("../models/productModel")

exports.getProducts=async(req,res)=>{
    try {
        // const{user_id,username}=req.user
        // console.log(username)
        // if(!user_id){
        //     return res.status(400).json("login to see")
        // }
        const products=await Product.find()
        if(!products){
            return res.status(400).json("No products available")
        }
        return res.status(200).json(products)
    } catch (error) {
        console.log(error)
    }
}

exports.addProducts=async(req,res)=>{
    try {
        const {user_id}=req.user
        const {brand,model,type,price,image,image1,image2,image3,image4,description}=req.body
        const data=new Product({
            id:uuid(),
            brand,
            model,
            type,price,image,image1,image2,image3,image4,description
        })
        await data.save()
        res.status(201).json(data)
    } catch (error) {
        console.log(error);
    }
}

exports.deleteProducts=async(req,res)=>{
    try {
        const {user_id}=req.user
        const {id}=req.body
        if(!user_id){
            return res.status(400).json("token not found to authorize")
        }
        const prod=await Product.findOneAndDelete({id})
        res.status(200).json("deleted successfully")

    } catch (error) {
        console.log(error)
    }
}