const path = require('path')

const express = require('express');

const admin = require('./admin')

const router = express.Router()

router.get('/',(req,res,next)=>{
    console.log('shop', admin.product)
    res.render('shop', {
        pageTitle :'فروشگاه'
    })    
})

module.exports = router