const getDb = require('../util/database').getDb
const mongodb = require('mongodb')

class Product {
    constructor(title){
        this.title = title 
    }

    save(){
        const db  = getDb()

        return db
        .collection('products')
        .insertOne(this)
        .then((result)=>console.log(result))
        .catch((err)=>console.log(err))
    }

    static fetchAll(){
        const db = getDb()

        return db
        .collection('products')
        .find()
        .toArray()
        .then((products)=>{
            console.log(products)
            return products
        })
        .catch((err)=>console.log(err))
    }

    static deletById(pId){
        const db = getDb()

        return db
        .collection('products')
        .deleteOne({_id:new mongodb.ObjectId(pId)})
        .then((result) => console.log(result))
        .catch((err) => console.log(err))
    }
}

module.exports = Product