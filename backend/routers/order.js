import express from 'express'
import { veiryToken } from '../Verification.js'
import { CreateOrders, GetOrders } from '../controlers/order.js'
const router = express()

router.post("/create",  CreateOrders)
router.get('/:id', GetOrders)


export default router