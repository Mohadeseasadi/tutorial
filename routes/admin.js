const path = require('path')

const express = require('express');

const router = express.Router()

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})

const products = []
router.post('/add-product',(req,res,next)=>{
    const { title } = req.body
    products.push({ titles : title})
    res.redirect('/')
})

exports.routes = router
exports.product = products