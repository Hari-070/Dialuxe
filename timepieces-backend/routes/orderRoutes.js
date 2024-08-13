const express=require('express')
const { postOrder, getOrder } = require('../controllers/orderController')
const auth = require('../middlewares/auth')

const router=express.Router()

router.post('/post',auth,postOrder)
router.get('/get',auth,getOrder)

module.exports=router