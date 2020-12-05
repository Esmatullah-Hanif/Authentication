const User = require("../models/user");
const { run } = require("../util/db");

exports.creatUser = (req, res, next) => {
  const { username } = req.body;
  const { email } = req.body;
  const { password } = req.body;
  const { role } = req.body;

  //the input such as username and password should be validated here
  //and the random id should be specified to the user id

  //then here below we create an object from the User class and assign the properties to it
  const user = new User(id, username, password);
};
exports.updateUser = (req, res, next) => {
  // get userId from user
  // if user not exist show not found message with 404
  // if user exist update the user date to the new one
  // push all the changes to the database and commit it in the database
};
exports.deleteUser = (req, res, next) => {
  // get user by id
  // check for user exsistance if no user found show the not found message with status code 404
  // delete the user from database and commit this changes to the database
};
exports.getUser = (req, res, next) => {
  // get user by id
  // if user not exist show him error message with 404
  // send user data to the user detail view
};
exports.getUsers = async (req, res, next) => {
  // get all user from database
  //   if no user show message ofno user found with status code
  //send all user to the index view

  const result = await run(
    `SELECT * from employees` 
  );
  console.log(result.rows);
  res.json(result.rows);
};
