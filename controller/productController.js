
const Product = require('./../model/productModels');
const ProductDetails = require('./../model/productDetails');

//create a product
const createAProduct =  async (req, res) => {
    try{
        var newProduct ={ name: req.body.name, description: req.body.description};
        const newProduct1 = await Product.create(newProduct);
         var newProductDetails= { price: req.body.price, size: req.body.size, pid: newProduct1._id};
        console.log(newProductDetails);
        const newProductDetails1 = await ProductDetails.create(newProductDetails);
         res.status(200).json({
          status: 'success',
          data: {
              product: { newProduct1, newProductDetails1}
          }
      });
  }catch(err) {
      res.status(400).json({
          status: 'fail',
          message: err
      });
  }
  
  }
//Read all products
const getAllProducts =  async (req, res) => {
    try {
        let data = await Product.find();
    res.status(200).json({
        status: 'success',
        length: data.length,
        data
    });
    }catch(err) {
        res.status(404).json({ 
            status: 'fail',
            message: err
        });
    }
    
}

//update a product
const updateAProduct = async (req, res) => {
    try {
        var p1 = { name: req.body.name, description: req.body.description};
        var p2 = {price: req.body.price, size: req.body.size};
        const product1 = await Product.findByIdAndUpdate(req.params.id, p1, {
            new: true,
            runValidators: true
        })
        const product2 = await ProductDetails.findOneAndUpdate({pid: req.params.id}, {$set: p2},{
            new: true,
            runValidators: true
        })
            res.status(200).json({
                status: 'success',
                product: { product1, product2}
            });
    }catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
    }
   //delete a product 
const deletAProduct = async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        await ProductDetails.deleteOne({ pid: req.params.id });
        res.status(200).json({
            status: ' deleted successfully'
        });
    }catch(err) {
        res.status(404).json({
            status: 'deletion failed',
            message: err
        })
    }
    
    }


module.exports = {
    createAProduct,
    getAllProducts,
    updateAProduct,
    deletAProduct
}