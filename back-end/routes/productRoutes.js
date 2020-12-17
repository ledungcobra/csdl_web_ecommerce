import express from 'express';
import {getProductById, getProducts} from "../controllsers/productController.js";

const router = new express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);



export default router;
