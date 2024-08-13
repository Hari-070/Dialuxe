const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({
    order_id:String,
    customer:{
        name: String,
        phNumber: Number,
        address: String,
        email: String
    },
    user_id:String,
    products:[{
        product_id: String,
        quantity: Number
    }],
    orderDate: Date,
    estDelivery: Date
})

const Order=mongoose.model("order",orderSchema)
module.exports=Order