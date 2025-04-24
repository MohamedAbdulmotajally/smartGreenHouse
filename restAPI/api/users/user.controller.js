const { create, getUsers, getUserById, updateUser, deleteUser, getUserByUserName } = require('./user.service');
const {genSaltSync, hashSync, compareSync} = require('bcrypt');
const {sign} = require('jsonwebtoken');

module.exports = {
    createUser:(req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body,(err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success : 0,
                    message : "database connection error"
                });
            }
            return res.status(200).json({
                success : 1,
                data : results
            });
        });
    },
    getUserByUserId:(req, res) => {
        const id = req.params.id;
        getUserById(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success : 0,
                    message : "database connection error"
                });
            }
            if(!results){
                return res.json({
                    success : 0,
                    message : "no records are found"
                });
            }
            return res.status(200).json({
                success : 1,
                data : results
            });
        });
    },
    getUsers:(req, res) => {
        getUsers( (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success : 0,
                    message : "database connection error"
                });
            }
            return res.status(200).json({
                success : 1,
                data : results
            });
        });
    },
    updateUser:(req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success : 0,
                    message : "database connection error"
                });
            }
            return res.status(200).json({
                success : 1,
                message : "user Updated Succefully"
            });
        });
    },
    deleteUser:(req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success : 0,
                    message : "database connection error"
                });
            }
            if(!results.affectedRows){
                return res.json({
                    success : 0,
                    message : "no records are found"
                });
            }
            return res.status(200).json({
                success : 1,
                message : "user Deleted Successfully"
            });
        });
    },
   login: (req, res) => {
    const body = req.body;
    getUserByUserName(body.user_name, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success : 0,
                message : "database connection error"
            });
        }
        if(!results){
            return res.json({
                success : 0,
                data : "Invalid Email or password"
            });
        }
        const result = compareSync(body.password, results.password);
        if(result){
            results.password = undefined;
            const jsontoken = sign({result: results}, 'key1234', {expiresIn: "1h"});
            return res.json({
                success : 1,
                message : "Login Successfully",
                token : jsontoken
            });
        } else{
            return res.json({
                success : 0,
                message : "Invalid username or password",
                token : jsontoken
            });
        }
        
    });
   }
};