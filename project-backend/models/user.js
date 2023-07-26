const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers/index");

const { emailRegexp } = require("../constants/users");

// const { Boolean } = require("joi");



const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    token: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

// створюємо монгус - Модель
// клас  пишемо з великої літери
const User = model("user", userSchema);

module.exports = User;