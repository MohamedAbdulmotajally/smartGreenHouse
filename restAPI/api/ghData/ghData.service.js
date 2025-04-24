const pool = require("../../config/dbConfig.js");

         
module.exports ={
    create: (data, callBack) => {
        pool.query(
            "INSERT INTO `green_house_data`(`gh_id`, `ldr`, `tank_level`, `moisture`, `humidity`, `temp`, `gas`) VALUES (?,?,?,?,?,?,?)",
            [
                data.gh_id,
                data.ldr,
                data.tank_level,
                data.moisture,
                data.humidity,
                data.temp,
                data.gas
            ],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res);
            }
        );    
    },
    getAllghData: callBack => {
        pool.query(
            "SELECT * FROM `green_house_data`",
            [],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res);
            }

        );
    },
    retriveAllGH: callBack => {
        pool.query(
            "SELECT * FROM `green_house`",
            [],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res);
            }

        );
    },
    getLastghData: callBack => {
        pool.query(
            "SELECT * FROM `green_house_data` ORDER BY id DESC LIMIT 1",
            [],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res);
            }

        );
    },
    getghDataById: (id, callBack) => {
        pool.query(
            "SELECT * FROM `green_house_data` WHERE id=?",
            [id],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res[0]);
            }

        );
    },
    getghById: (id, callBack) => {
        pool.query(
            "SELECT * FROM `green_house` WHERE id=?",
            [id],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res[0]);
            }

        );
    },
    getImageByghPlantId: (id, callBack) => {
        pool.query(
            "SELECT `image`,`name` FROM `plant` WHERE id=?",
            [id],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res[0]);
            }

        );
    },
    updateghData: (data, callBack) => {
        pool.query(
            "UPDATE `green_house_data` SET `gh_id`=?,`ldr`=?,`tank_level`=?,`moisture`=?,`humidity`=? ,`temp`=?,`gas`=? WHERE id=?",
            [
                data.gh_id,
                data.ldr,
                data.tank_level,
                data.moisture,
                data.humidity,
                data.temp,
                data.gas,
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
    updateGreenHousePlanet: (data, callBack) => {
        pool.query(
            "UPDATE `green_house` SET `plant_id`=? WHERE id=?",
            [

                data.plant_id,
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
    deleteghData: (data, callBack) => {
        pool.query(
            "DELETE FROM `green_house_data` WHERE  id=?",
            [data.id],
            (err, res, fields) => {
                if (err) {
                  return  callBack(err);
                }
                return callBack(null, res);
            }

        );
    }
};