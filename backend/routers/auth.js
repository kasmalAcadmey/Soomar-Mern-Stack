import express from 'express'
import { Login, Register } from '../controlers/auth.js'
import { veiryToken } from '../Verification.js'


const router = express()


router.post("/login", Login)

router.post("/register", Register)
router.get('/test',veiryToken, (req, res)=> (
    res.status(200).send('test is good')
))


export default router