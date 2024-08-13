const { uuid } = require("uuidv4")
const Cart = require("../models/cartModel")
const Order = require("../models/orderModel")
const Product = require("../models/productModel")
const User = require("../models/userModel")

exports.postOrder=async(req,res)=>{
    try {
        const {user_id}=req.user
        const {name,address,phNumber}=req.body
        const cart=await Cart.findOne({user_id})
        const user=await User.findOne({_id:user_id})
        if(!cart){
            return res.status(400).json("there is no items to checkoout")
        }
        let est=new Date()
        est.setDate(est.getDate()+10)
        const order=await Order({
            order_id:uuid(),
            customer:{
                name,
                address,
                phNumber,
                email: user.email
            },
            user_id,
            products:cart.products,
            orderDate: new Date(),
            estDelivery: est
        })
        await order.save()
        res.status(200).json("order saved")
    } catch (error) {
        console.log(error);
        
    }
}

exports.getOrder=async(req,res)=>{
    try {
        const {user_id}=req.user
        let order=await Order.findOne({user_id})
        if(!order){
            return res.status(400).json("there is no order")
        }
        order = order.toObject()
        order.products=await Promise.all(order.products.map(async(item)=>{
            const products=await Product.findOne({id:item.product_id})
            return{
                id:item.product_id,
                brand:products.brand,
                model: products.model,
                price:products.price,
                image:products.image,
                quantity:item.quantity
            }
        }))
        console.log(order)
        res.status(200).json(order)
        
    } catch (error) {
        console.log(error);
        
    }
}