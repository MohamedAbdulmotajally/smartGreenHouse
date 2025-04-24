const {controlGreenHouseFAN, controlGreenHouseBULB, controlGreenHousePUMB } = require('./ghControl_controller');
const router = require('express').Router();
//const {checkToken} = require('../../auth/token_validation')

router.post('/fan', controlGreenHouseFAN);
router.post('/bulb', controlGreenHouseBULB);
router.post('/pumb', controlGreenHousePUMB);
module.exports = router;