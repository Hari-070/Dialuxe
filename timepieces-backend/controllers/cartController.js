const Cart = require("../models/cartModel")
const Product = require("../models/productModel")

exports.addToCart=async(req,res)=>{
    try {
        const {user_id}=req.user
        const {product_id,quantity}=req.body
        const cart=await Cart.findOne({user_id})
        if(!cart){
            const newCart=new Cart({
                user_id,
                products:[{
                    product_id,
                    quantity
                }]
            })
            await newCart.save()
            return res.status(200).json(newCart)
        }
        const existingProduct=cart.products.findIndex((item)=>(
            item.product_id===product_id
        ))
        if(existingProduct==-1){
            cart.products.push({
                product_id,
                quantity
            })
        }
        else{
            cart.products[existingProduct].quantity=quantity
        }
        await cart.save()
        res.status(200).json(cart)
    } catch (error) {
        console.log(error)
    }
}

exports.getCart=async(req,res)=>{
    try {
        const {user_id}=req.user
        const cart=await Cart.findOne({user_id})
        if(!cart){
            return res.status(400).json("No cart found")
        }
        const cartProducts=await Promise.all(cart.products.map(async(item)=>{
            const product=await Product.findOne({id:item.product_id})
            // console.log(product);
            return{
                id:item.product_id,
                brand:product.brand,
                model:product.model,
                price:product.price,
                image:product.image,
                quantity:item.quantity
            }
        }))
        // console.log(cartProducts)
        res.status(200).json(cartProducts)
    } catch (error) {
        console.log(error);
        
    }
}

exports.deleteCart=async(req,res)=>{
    try {
        const {user_id}=req.user
        const {product_id}=req.body
        const cart=await Cart.findOne({user_id})
        const product1=cart.products.filter((item)=>(
            item.product_id!=product_id
        ))
        await Cart.findOneAndUpdate({user_id},{products:product1})
        res.status(200).json("deleted")
    } catch (error) {
        console.log(error)
    }
}