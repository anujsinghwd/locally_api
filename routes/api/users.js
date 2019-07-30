const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load users Model
const User = require('../../models/Users');


// @route   POST api/users/register
// @dsec    Register User
// @access  Public
/**
 * @api {post} api/users/register Register New User
 * @apiName Register New User
 * @apiGroup User
 * @apiVersion 0.0.1
 * 
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "Anuj Singh"   
 *       "email": "anuj_singh@outlook.in",
 *       "password": "sumanuj11",
 *       "password2": "sumanuj11"
 *     }
 *
 *
 * @apiParam {String} name User Full Name.
 * @apiParam {String} email User's Email Address.
 * @apiParam {String} password User's Password.
 * @apiParam {String} password2 Repeat Password
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
    {
        "_id": "5d4077188ab23c081b7a8f76",
        "name": "Anuj Singh",
        "email": "anuj_singh@outlook.in",
        "password": "$2a$10$t2Y6GRvhckRPzr8bSVejUex7Oi5JZ6cw2XXnt7SvKobd8BKo5bb1m",
        "date": "2019-07-30T16:58:00.513Z",
        "__v": 0
    }
 * 
 */
router.post('/register', (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body);

    // Cheack Validation
    if(!isValid){
         return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if(user){
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            }else{
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
});


// @route   POST api/users/login
// @dsec    Login User / Returning JWT Token
// @access  Public
/**
 * @api {post} api/users/login Login User / Returning JWT Token
 * @apiName Login User
 * @apiGroup User
 * @apiVersion 0.0.1
 * 
 * @apiParamExample {json} Request-Example:
 *     {
 *       "email": "anuj_singh@outlook.in",
 *       "password": "sumanuj11"
 *     }
 *
 * @apiParam {String} email User's Email.
 * @apiParam {String} password User's Password.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
    {
        "success": true,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDA3NzE4OGFiMjNjMDgxYjdhOGY3NiIsIm5hbWUiOiJBbnVqIFNpbmdoIiwiaWF0IjoxNTY0NTA2MjUxLCJleHAiOjE1NjQ1MDk4NTF9.z6P1IoeYuMGGxs3TLLYLToU-YT0q4SQH1K5Pi8-gdfA",
        "type": "Bearer",
        "expiresIn": 3600
    }
 * 
 */
router.post('/login', (req, res) => {

    const {errors, isValid} = validateLoginInput(req.body);

    // Cheack Validation
    if(!isValid){
         return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    //FInd User By Email
    User.findOne({email})
        .then(user => {
            //Check For Users
            if(!user){
                errors.email = 'User not found';
                return res.status(404).json(errors);
            }

            //Check Password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){
                        //res.json({msg: 'Success'});
                        // User Matched
                        const payload = {id: user.id, name: user.name}; // Create jwt payload

                        //Sign Token
                        jwt.sign(payload, keys.secretOrKey, {expiresIn: 84600}, (err, token) => {
                            res.json({
                                success: true,
                                token: token,
                                type: 'Bearer',
                                expiresIn: 84600
                            })
                        });
                    } else {
                        errors.password = 'Password Incorrect';
                        return res.status(400).json(errors);
                    }
                })
        })
});

// @route   GET api/users/current
// @dsec    Register current user
// @access  Private
/**
 * @api {get} api/users/current Get current user
 * @apiName Get Current User
 * @apiGroup User
 * @apiVersion 0.0.1
 * 
 * @apiParamExample {json} Request-Example:
 *     {
 *       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNDA3NzE4OGFiMjNjMDgxYjdhOGY3NiIsIm5hbWUiOiJBbnVqIFNpbmdoIiwiaWF0IjoxNTY0NTA2NTg3LCJleHAiOjE1NjQ1OTExODd9.ug7BBgo3YEG4cZYXONCHYOvFJB0ehStPZ_VMhGRpcDo"
 *     }
 * 
 * @apiHeader {String} Authorization Bearer Token.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
    {
        "id": "5d4077188ab23c081b7a8f76",
        "name": "Anuj Singh",
        "email": "anuj_singh@outlook.in"
    }
 * 
 */
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

module.exports = router;