import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import products from './data/products.js';
const app = express()
import cors from 'cors'
import connectDB from './config/db.js';

const port = process.env.PORT || 5000;

connectDB()
app.use(cors());

app.get('/', (req, res)=>{
    res.send('api...')
})

app.get('/api/products',( req, res)=>{
    res.json(products)
})

app.get('/api/products/:id',( req, res)=>{
    const product = products.find((p)=> p._id === req.params.id)
    res.json(product)
})


app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})