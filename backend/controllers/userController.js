const { registerValidation, loginValidation } = require("../middleware/validation");
const Model = require("../models/userModel");

const handleGetAll = (req, res) => {
    console.log("Request at user index");
    res.status(299).send("UserRouter Working Perfectly!!");
};

const handleSignup = async (req, res) => {
    try{}catch(err){}
}