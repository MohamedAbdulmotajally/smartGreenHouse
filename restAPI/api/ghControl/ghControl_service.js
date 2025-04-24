const pool = require("../../config/dbConfig.js");


module.exports = {

    updateControlFan: (data, callBack) => {
        pool.query(
            "UPDATE `control` SET `fan`=? WHERE gh_id=?",
            [
                data.fanvalue,

                data.id
            ],
            (err, res, fields) => {
                if (err) {
                    return callBack(err);
                }
                return callBack(null, res);
            }
        );
    },
    updateControlPumb: (data, callBack) => {
        pool.query(
            "UPDATE `control` SET `pump`=?  WHERE gh_id=?",
            [

                data.pumbvalue,

                data.id
            ],
            (err, res, fields) => {
                if (err) {
                    return callBack(err);
                }
                return callBack(null, res);
            }
        );
    },
    updateControlbulb: (data, callBack) => {
        pool.query(
            "UPDATE `control` SET `bulb`=? WHERE gh_id=?",
            [

                data.bulbvalue,
                data.id
            ],
            (err, res, fields) => {
                if (err) {
                    return callBack(err);
                }
                return callBack(null, res);
            }
        );
    },
    

};