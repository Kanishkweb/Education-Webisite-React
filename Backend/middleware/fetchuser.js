const jwt  = require('jsonwebtoken');
const JWT_SECRET = "Kanishkisagood$oy";

const fetchuser = (req,res,next)=> {
    // Get the user from the JWT web Token and ID to req the object
    const token = req.header('auth-token')
    if(!token){
        res.status(401).send({Error:"Please try with Valid Token"})
    }
    try {
        const data = jwt.verify(token,JWT_SECRET)
        req.user = data.user
    } catch (error) {
        res.status(401).json({Erorr:"Using Invalid Token"})
    }

}
module.exports = fetchuser;