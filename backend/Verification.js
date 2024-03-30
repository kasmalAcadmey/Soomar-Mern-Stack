import jwt from 'jsonwebtoken'


export const  veiryToken = async (req, res, next)=>{
const token = req.cookies.accessToken

if(!token){
    return res.status(404).send("you don't have token")
}
jwt.verify(token, process.env.JWT_ACCESS, (err, user)=> {
    if(err){
        return res.status(403).send('token is not invalid')
    }
    req.user = user,
    next()
   
})
}
  