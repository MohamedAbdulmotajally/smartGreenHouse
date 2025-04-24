const pool = require("../../config/dbConfig.js");

module.exports ={
    create: (data, callBack) => {
        pool.query(
            "INSERT INTO `user`(`role_id`, `name`, `image`, `address`, `email`, `user_name`, `password`) VALUES (?,?,?,?,?,?,?)",
            [
                data.role_id,
                data.name,
                data.image,
                data.address,
                data.email,
                data.user_name,
                data.password
            ],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res);
            }
        );    
    },
    getUsers: callBack => {
        pool.query(
            "SELECT * FROM `user`",
            [],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res);
            }

        );
    },
    getUserById: (id, callBack) => {
        pool.query(
            "SELECT * FROM `user` WHERE id=?",
            [id],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res[0]);
            }

        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            "UPDATE `user` SET `role_id`=?,`name`=?,`image`=?,`address`=?,`email`=?,`user_name`=?,`password`=? WHERE id=?",
            [
                data.role_id,
                data.name,
                data.image,
                data.address,
                data.email,
                data.user_name,
                data.password,
                data.id
            ],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res);
            }
        );    
    },
    deleteUser: (data, callBack) => {
        pool.query(
            "DELETE FROM `user` WHERE  id=?",
            [data.id],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res[0]);
            }

        );
    },
    getUserByUserName: (userName, callBack) => {
        pool.query(
            "SELECT * FROM `user` WHERE user_name=?",
            [userName],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res);
            }

        );
    }
};