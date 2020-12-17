import asyncHandler from "express-async-handler";
import Product from '../models/productModel.js';

// @desc fetch all products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}).lean()
    res.json(products);
});

// @routes GET /api/products
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404).json({message: 'Product not found'});
        throw new Error('Product not found');
    }
    res.json(product);


});

export {
    getProducts,
    getProductById
};