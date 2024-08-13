const express =require('express')
const auth = require('../middlewares/auth')
const { addToCart, getCart } = require('../controllers/cartController')

const router=express.Router()

router.post("/addtocart",auth,addToCart)
router.get("/get",auth,getCart)

module.exports=router