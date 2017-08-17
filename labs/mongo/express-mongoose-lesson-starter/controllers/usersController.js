var express = require('express');
var router = express.Router();


var User = require("../models/user");
var Item = require("../models/item");




// USERS INDEX ROUTE
router.get('/', (req, res) => {
    
    User.find({})
        .then((users) => {

            console.log(users[0]._id); // Trick to find id
            res.render('users/index', {
                users: users
            });
        })
        .catch((error) => {
            console.log(`ERROR!!!! ${error}`);
        });

})

// USER CREATE FORM

router.get('/new', (req, res) => {
    res.render("users/new");
})

// USER CREATE ROUTE

router.post('/', (req, res) => {

    const newUser = new User(req.body);

    newUser.save()
        .then((newUser) => {
            console.log('New user created with ID of: ' + newUser._id);

            res.render('users/show', {
                user: newUser
            });
        })
        .catch((error) => {
            if(error) {
                console.log('Error saving new user to database! ' + error);

            }
        })

})

// USER SHOW ROUTE

router.get('/:id/', (req, res) => {

    const userIdToSearchDbFor = req.params.id;
    User.findById(userIdToSearchDbFor)
        .then((user) => {
            res.render('users/show', {
                user: user
            });
                
        })
        .catch((error) => {
            console.log("Error: " + error);
        })

})


// USER DESTROY

router.get('/:id/delete', (req, res) => {
    
    const userIdToDelete = req.params.id;

    User.findByIdAndRemove(userIdToDelete)
        .then(() => {
            console.log("Successfully deleted user with ID: " + userIdToDelete);
        })
        .catch((error) => {
            console.log("Error deleting user from database: " + error);
        })

})

// USER UPDATE ROUTE

router.get('/:id/edit', (req, res) => {

    const userIdToFind = req.params.id;

    User.findById(userIdToFind) 
        .then((user) => {
            res.render('users/edit', {
                user
            })
        })
        
})

router.put('/:id', (req, res) => {

    const userIdToUpdate = req.params.id;
    const updatedUserInfo = req.body;
    
    User.findByIdAndUpdate(
        userIdToUpdate,
        updatedUserInfo,
        {new: true}
    ) .then((user) => {
        console.log('User with ID of ' + user._id + ' updated');

        res.render('users/show', {
            user
        })
        .catch((error) => {
            console.log('Error! User failed to update: ' + error);
            console.log(error);
        })

    })
})


// ADD A NEW ITEM

// REMOVE AN ITEM

module.exports = router;
