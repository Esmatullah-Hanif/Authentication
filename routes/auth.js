const express = require("express");
const { check } = require("express-validator/check");

const router = express.Router();

//  imported controllers
const controller = require("../controllers/auth");

// signup route
router.post(
  "signup",
  [
    // validating User name
    check("user_name")
      .withMessage("plece enter a valid Username!")
      .isLength({ min: 3, max: 50 })
      .isAlphanumeric()
      .trim(),

    // validating signup email
    check("email")
      .withMessage("plece enter a valid email")
      .isEmail()
      .normalizeEmail()
      .trim(),

    // validating password
    check("password")
      .withMessage("password should have 8 char")
      .isLength({ min: 8 })
      .trim(),

    check("Confirme-password")
      .withMessage("password should have 8 char")
      .isLength({ min: 8 })
      .trim(),
  ],
  controller.signup
);

// login route
router.post(
  "login",
  [
    // validating login email
    check("email")
      .withMessage("enter a valid email")
      .isEmail()
      .normalizeEmail()
      .trim(),

    // validating loging password
    check("password")
      .withMessage("plece enter a valid password")
      .isLength({ min: 8 }),
  ],
  controller.login
);

module.exports = router;
