const express =require('express')
const auth = require('../middlewares/auth')
const { addToCart, getCart, deleteCart } = require('../controllers/cartController')

const router=express.Router()

router.post("/addtocart",auth,addToCart)
router.get("/get",auth,getCart)
router.post('/delete',auth,deleteCart)

module.exports=router