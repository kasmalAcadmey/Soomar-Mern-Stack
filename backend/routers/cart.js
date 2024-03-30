import express from 'express'
import { CreateCart, DecreaseCart, DeleteCart, FindCart, clearCart } from '../controlers/cart.js'
import { veiryToken } from '../Verification.js'

const router = express()


router.post('/', CreateCart)
router.get('/find/:id', FindCart)
router.put('/', veiryToken, DecreaseCart)
router.post('/clear', veiryToken, clearCart)
router.delete('/delete', DeleteCart)

export default router