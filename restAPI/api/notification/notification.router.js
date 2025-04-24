const {createNotification, getNotificationById, getNotification,deleteNotification, getLastNotification } = require('./notification.controller');
const router = require('express').Router();
const {checkToken} = require('../../auth/token_validation')

//checkToken
router.post('/', createNotification);
router.get('/', getNotification);
router.get('/:id', getNotificationById);
router.get('/lastOne', getLastNotification);
router.delete('/', deleteNotification);


module.exports = router;