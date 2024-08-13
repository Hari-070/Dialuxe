const express=require('express')
const cors=require('cors')
const  mongoose  = require('mongoose')
const userRoutes=require('./routes/userRoutes')
const productRoutes= require('./routes/productRoutes')
const cartRoutes=require('./routes/cartRoutes')
const orderRoutes=require('./routes/orderRoutes')
const User = require('./models/userModel')


const PORT=3000

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/dialuxe')
.then(()=>{
    console.log("DB connected");
})

app.use('/user',userRoutes)
app.use('/products',productRoutes)
app.use('/cart',cartRoutes)
app.use('/order',orderRoutes)

app.listen(PORT,()=>{
    console.log(`successfully running at port ${PORT}`);
    
})
