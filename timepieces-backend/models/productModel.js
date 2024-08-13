const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    id: String,
    brand:String,
    model:String,
    type: String,
    price: Number,
    image: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    description: String
})

const Product = new mongoose.model("products",productSchema)
module.exports=Product