exports.getAddProduct=(req,res,next)=>{
    res.render('add-product', {
        pageTitle: 'افزودن محصول'
    })
}

const products = []
exports.postAddProduct =(req,res,next)=>{
    const { title } = req.body
    products.push({ titles : title})
    res.redirect('/')
}

exports.getProduct = (req,res,next)=>{
    res.render('shop', {
        pageTitle :'فروشگاه' ,
        productKey : products
    })    
}