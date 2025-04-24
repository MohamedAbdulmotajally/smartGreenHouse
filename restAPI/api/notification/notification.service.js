const pool = require("../../config/dbConfig.js");

module.exports ={
    create: (data, callBack) => {
        pool.query(
            "INSERT INTO `notification`(`gh_id`, `name`, `title`) VALUES (?,?,?)",
            [
                data.gh_id,
                data.name,
                data.title,
            ],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res);
            }
        );    
    },
    getNotification: callBack => {
        pool.query(
            "SELECT * FROM `notification`",
            [],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res);
            }

        );
    },
    getNotificationById: (id, callBack) => {
        pool.query(
            "SELECT * FROM `notification` WHERE id=?",
            [id],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res[0]);
            }

        );
    },
    deleteNotification: (data, callBack) => {
        pool.query(
            "DELETE FROM `notification` WHERE  id=?",
            [data.id],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res[0]);
            }

        );
    },
    getLastNotification: callBack => {
        pool.query(
            "SELECT * FROM `notification` ORDER BY id DESC LIMIT 1",
            [],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res);
            }

        );
    }
};