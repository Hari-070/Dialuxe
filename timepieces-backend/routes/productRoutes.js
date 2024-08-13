const express=require('express')
const { getProducts, addProducts, deleteProducts } = require('../controllers/productController')
const auth = require('../middlewares/auth')
const router=express.Router()

router.get('/allProducts',getProducts)
router.post('/addproduct',auth,addProducts)
router.delete('/delete',auth,deleteProducts)

module.exports=router