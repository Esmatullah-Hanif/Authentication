const express = require('express');
const router = express.Router();

//imported controllers
const usersController = require('../controllers/user');


//creating user
router.post('/', usersController.creatUser);

//updating user
router.patch('/:id', usersController.updateUser);



//getting all users
router.get('/', usersController.getUsers);

//getting specific user
router.get('/:id', usersController.getUser);

//deleting user
router.delete('/:id', usersController.deleteUser);

module.exports = router;