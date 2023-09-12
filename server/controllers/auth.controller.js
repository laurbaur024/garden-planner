const { create, findOne, findById } = require("./user.controller");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function signToken(user) {
  return jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET);
}

async function register(req) {
  let user;
  try {
    user = await create(req.body);
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw err;
  }

  const token = signToken(user);

  // const { password, ...modifiedUser } = user;

  // console.log(modifiedUser.toObject());

  return { token, user };
}

async function login(req) {
  let user;

  try {
    user = await findOne({ email: req.body.email });
  } catch (err) {
    throw new Error(err);
  }

  if (!user) throw new Error("Could not authenticate");

  const passwordIsValid = await user.verify(req.body.password);
  if (!passwordIsValid) throw new Error("Could not authenticate");

  const token = signToken(user);

  const { password, ...modifiedUser } = user;
  return { token, user: modifiedUser };
}

async function verify(req) {
  let decryptCookie
  try {
    decryptCookie = jwt.verify(cookie, process.env.JWT_SECRET)
  } catch(err){
    throw new Error("Could not authenticate")
  }
  if( !decryptCookie ) throw new Error("Could not authenticate")

  const foundUser = await findById(decryptCookie.id);
  if (!foundUser) throw new Error("Could not authenticate");

  return { user: foundUser };
}

module.exports = {
  register,
  login,
  verify,
};
