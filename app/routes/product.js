import express from 'express';
import {getProducts,addProduct, getProductById} from '../controllers/product';

const router = express.Router();

router.get('/:productId', getProductById);
router.get('/', getProducts);
router.post('/', addProduct);

export default router;

