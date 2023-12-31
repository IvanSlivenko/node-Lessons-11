const Joi = require("joi");

const { emailRegexp } = require("../constants/users");

const userRegisterSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
});

const userLoginSchema = Joi.object({
 
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const userEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required()
  
});

module.exports = {
  userRegisterSchema,
  userLoginSchema,
  userEmailSchema,
};