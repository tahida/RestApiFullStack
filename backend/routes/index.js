// mengimport express router
import express from "express";
// memanggil logika yang ada di controller
import {
     getAllProducts, 
     createProduct, 
     getProductById,
     updateProduct,
     deleteProduct
    } from "../controllers/Products.js";

// fungsion express router
const router = express.Router();

// Basic Route 
router.get('/',  getAllProducts);
router.get('/:id',  getProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);


export default router;


