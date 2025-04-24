const { create, getNotification, getNotificationById, updateNotification, deleteNotification, getLastNotification} = require('./notification.service');


module.exports = {
    createNotification:(req, res) => {
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
    getNotificationById:(req, res) => {
        const id = req.params.id;
        getNotificationById(id, (err, results) => {
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
    getNotification:(req, res) => {
        getNotification( (err, results) => {
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
    deleteNotification:(req, res) => {
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
    getLastNotification:(req, res) => {
        getLastNotification( (err, results) => {
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
    }
};