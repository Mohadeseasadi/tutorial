const Product = require('../models/product')

exports.getAddProduct=(req,res,next)=>{
    res.render('add-product', {
        pageTitle: 'افزودن محصول'
    })
}


exports.postAddProduct =(req,res,next)=>{
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

exports.getProduct = (req,res,next)=>{
    Product.fetchAll().then((products)=>{
        res.render('shop',{
            pageTitle: "فروشگاه" ,
            products: products
        })
    })
}

exports.deeleteProduct = (req,res,next)=>{
    const pId = req.body.productId
    Product.deletById(pId)
    .then(()=>{
        console.log('product deleted')
        res.redirect('/')
    }) 
    .catch((err)=>console.log(err))
}