require('dotenv').config()
const cors = require('cors');

const express = require('express')
const path = require('path');
const server = express()
const mongoose = require('mongoose')
const { Schema } = mongoose;
// const productRouter = require('./routes/product')

const productRouter = express.Router()
const productController = require('./controllers/product')

//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_PASSWORD)
  console.log('database connected')
}



//middleware
server.use(cors())
server.use(express.json())
server.use(express.static(process.env.PUBLIC_DIR))
server.use('/api/', productRouter)
server.use(express.static(path.join(__dirname, 'public')));

//route
productRouter
  .post('/',  productController.createProduct )
  .get('/', productController.getAllProducts)
  .get('/:id', productController.getProduct)
  .put('/:id', productController.replaceProduct)
  .patch('/:id', productController.updateProduct)
  .delete('/:id',productController.deleteProduct)


//INFO Server listen on port
 
server.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`)
})















 





