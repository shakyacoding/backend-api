const fs = require('fs');
const mongoose = require('mongoose')
const model = require('../model/Product')
const Product = model.Product

//create
exports.createProduct = async (req,res) => {
  const product = new Product(req.body)  // making new instance of collection 

  try {
    const doc = await product.save();
    console.log({ doc });
    res.status(200).json(req.body);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create product',err });
  }
}

//read
exports.getAllProducts = async (req, res) => {
  const products = await Product.find()
  // const products = await Product.find({price:{$gt:800}})
  res.json(products)
}

//read
exports.getProduct = async (req,res) => {
  // console.log(req.params)
  // console.log(req.params.id) 
  const id = req.params.id
  const product = await Product.findById(id)
  res.json(product)
}

//put
exports.replaceProduct = async (req,res) => {
  const id = req.params.id
  try {
    const doc =  await Product.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(200).json(doc)
    
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

//patch
exports.updateProduct = async (req,res) => {
  const id = req.params.id
  try {
    const doc =  await Product.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(200).json(doc)
    
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

//delete
exports.deleteProduct = async (req,res) => {
  const id = req.params.id
  try {
    const doc =  await Product.findOneAndDelete({_id:id})
    res.status(200).json(doc)
    
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

