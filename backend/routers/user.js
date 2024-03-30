import express from 'express'
import { DeleteUser, UpdateUser,NewUserAddress , UserFind} from '../controlers/user.js'
import { veiryToken } from '../Verification.js'
const router = express()


router.delete("/delete_user/:id",veiryToken, DeleteUser)
router.put("/update_user/:id",veiryToken, UpdateUser)
router.get("/find/:id",UserFind )

router.put('/address/:id', NewUserAddress)



export default router