const {createGreenHouseRecord, getAllghData, getghDataById, updateghData, deleteghData, getLastghData,updateGreenHousePlanet ,retriveAllGH, getImageByghPlantId,getghById} = require('./ghData.controller');
const router = require('express').Router();
//const {checkToken} = require('../../auth/token_validation')

router.post('/', createGreenHouseRecord);
router.get('/', getAllghData);
router.get('/allGH', retriveAllGH);
router.get('/image/:id',getImageByghPlantId );
router.get('/lastOne', getLastghData);
router.get('/:id', getghDataById);
router.get('/gh/:id', getghById);
router.patch('/', updateghData);
router.post('/updatePID', updateGreenHousePlanet);
router.delete('/', deleteghData);


module.exports = router;