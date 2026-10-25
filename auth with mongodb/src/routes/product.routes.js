import express from 'express'
import { createProducts } from '../controllers/product.controller.js'
import { authenticateToken } from '../middlewares/auth.middleware.js'
import upload from '../middlewares/upload.middleware.js'
const router = express.Router()
router.post('/createProduct',authenticateToken,upload.single('image'),createProducts)
export default router