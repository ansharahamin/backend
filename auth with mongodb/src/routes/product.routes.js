import express from 'express'
import { createProducts, getProducts } from '../controllers/product.controller.js'
import { authenticateToken } from '../middlewares/auth.middleware.js'
import upload from '../middlewares/upload.middleware.js'
const router = express.Router()
router.post('/createProduct',authenticateToken,upload.single('image'),createProducts)
router.get('/',getProducts)
export default router