const jwt = require('jsonwebtoken')
const KEY_SECRECT = "this is key secret";

module.exports = (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('You have to add a token')
    try {
        const checkToken =jwt.verify(token,KEY_SECRECT);
        req.user = checkToken;
        next();

    } catch (error) {
        res.status(400).send('Invalib Token.')
    }
}