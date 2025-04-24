const { updateControlFan, updateControlPumb, updateControlbulb } = require('./ghControl_service');
const axios = require('axios');


var port = process.env.DEVICE_SERVER_PORT;
module.exports = {
    controlGreenHouseFAN: (req, res) => {
        const value = req.body.value;
        const data = {
            fanvalue: value,
            id: 1
        }
        //!value is : "on" and "off"

        updateControlFan(data, (err, results) => {
            console.log(err, results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error"
                });
            }
            if (!results.affectedRows) {
                return res.json({
                    success: 0,
                    message: "no records are found"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "fan control value Updated Successfully"
            });
        });

        // axios.get('https://localhost:' + port + '/fan?value=' + data.fanvalue)
        //     .then(response => {
        //         console.log(response.data.url);
        //         console.log(response.data.explanation);
    }
    ,

    controlGreenHouseBULB: (req, res) => {
        const value = req.body.value;
        const data = {
            bulbvalue: value,
            id: 1
        }
        //!value is : "on" and "off"
        updateControlbulb(data, (err, results) => {
            console.log(err, results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error"
                });
            }
            if (!results.affectedRows) {
                return res.json({
                    success: 0,
                    message: "no records are found"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "bulb control value Updated Successfully"
            });
        });


        // axios.get('https://localhost:' + port + '/bulb?value=' + value)
        //     .then(response => {
        //         console.log(response.data.url);
        //         console.log(response.data.explanation);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    },

    controlGreenHousePUMB: (req, res) => {
        const value = req.body.value;
        const data = {
            pumbvalue: value,
            id: 1
        }
        updateControlPumb(data, (err, results) => {
            console.log(err, results);
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "database connection error"
                });
            }
            if (!results.affectedRows) {
                return res.json({
                    success: 0,
                    message: "no records are found"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Pumb control value Updated Successfully"
            });
        });
        // axios.get('https://localhost:' + port + '/pumb?value=' + value)
        //     .then(response => {
        //         console.log(response.data.url);
        //         console.log(response.data.explanation);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    },
};