const { create, getAllghData, getghDataById, updateghData, deleteghData, getLastghData,updateGreenHousePlanet, retriveAllGH, getImageByghPlantId, getghById} = require('./ghData.service');


module.exports = {
    createGreenHouseRecord:(req, res) => {
        const body = req.body;
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
    getghDataById:(req, res) => {
        const id = req.params.id;
        getghDataById(id, (err, results) => {
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
    getghById:(req, res) => {
        const id = req.params.id;
        getghById(id, (err, results) => {
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
    getImageByghPlantId:(req, res) => {
        const id = req.params.id;
        getImageByghPlantId(id, (err, results) => {
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
    getAllghData:(req, res) => {
        getAllghData( (err, results) => {
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
    retriveAllGH:(req, res) => {
        retriveAllGH( (err, results) => {
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
    getLastghData:(req, res) => {
        getLastghData( (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success : 0,
                    message : "database connection error"
                });
            }
            return res.status(200).json({
                success : 1,
                data : results[0]
            });
        });
    },
    updateghData:(req, res) => {
        const body = req.body;
        updateghData(body, (err, results) => {
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
    updateGreenHousePlanet:(req, res) => {
        const body = req.body;
        updateGreenHousePlanet(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success : 0,
                    message : "database connection error"
                });
            }
            return res.status(200).json({
                success : 1,
                message : "planet id  Updated Succefully"
            });
        });
    }
    ,
    deleteghData:(req, res) => {
        const data = req.body;
        deleteghData(data, (err, results) => {
            console.log(err, results);
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
    }
};