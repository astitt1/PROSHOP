import React from 'react'
import {Row, Col} from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
import { useEffect, useState } from 'react'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const fetchProducts = async ()=> {
      const {data} = await axios.get('/api/products')
      
      setProducts(data)
      console.log(products)
    }
    fetchProducts()
  }, [])

   
  return (
    <>
    <h1>Latest Products</h1>

    <Row>
        {/* multi line implicit return using () */}
        { products ? products.map((product)=>(
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product  product={product} />
            </Col>
        )) : `Loading...`}
        
    </Row>
    </>
  )
}

export default HomeScreen