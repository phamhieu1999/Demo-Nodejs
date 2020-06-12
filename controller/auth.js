const bcrybt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const KEY_SECRECT = "this is key secret";
const User = require('../model/User');
const { registerValidation, loginValidation } = require('../vadidate/vadidation');

// register a user
const registerUser = async (req, res) => {
    // let validate  the data before  we a user
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // Checking  if the user is alrealy in the database
    const emailExit = await User.findOne({ email: req.body.email });
    if (emailExit) return res.status(400).send('Email  already exits');
    // hash passwords
    const salt = await bcrybt.genSalt(10);
    const hashPassword = await bcrybt.hash(req.body.password,salt);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    try {
        const saveUser = await user.save();
        res.send(saveUser)
    } catch (error) {
        res.status(400).send(err)
    }
}

// login

const loginUser = async(req,res) =>{
    //Lets vadidate the data before we a user
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    //Checking if email exits
    const user = await User.findOne({  email:req.body.email })
    if(!user) return res.status(400).send('Email is not found');
    //Password  is correct
    const validatePassword = await bcrybt.compare(req.body.password,user.password);
    if(!validatePassword) return res.status(400).send('Invalid password')
    // res.send('Login success.')
    // create and  assign a token
    const token = jwt.sign({_id:user._id},KEY_SECRECT);
    res.header('auth-token',token).send(token); 
}

module.exports.registerUser = registerUser;
module.exports.loginUser = loginUser;