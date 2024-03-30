import express from 'express'
import { CreateProdcut, GetProducts, SingleProdcut, UpdateProdcut } from '../controlers/prdoucts.js'

const router = express()

router.post('/', CreateProdcut)
router.put('/:id', UpdateProdcut)
router.get('/find/:id', SingleProdcut)
router.get('/', GetProducts)


export default router