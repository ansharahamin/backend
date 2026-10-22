import express from 'express'
import { createProducts } from '../controllers/product.controller.js'
const router = express.Router()
router.post('/createProduct',createProducts)
export default router