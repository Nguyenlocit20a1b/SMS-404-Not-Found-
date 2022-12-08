var express = require('express');
var router = express.Router();
var couserController = require('../controller/couser.controller');



router.get('/cousers', couserController.getCousers);
router.get('/couser/add-couser', couserController.getCouserCreate);
router.post('/couser/add-couser', couserController.postCouserCreate);
// Detail 
router.get('/couser/detail/:id' ,couserController.getCouserDetail);

// Update 
router.get('/couser/update-couser/:id', couserController.getCouserUpdate);
router.post('/couser/update-couser/:id', couserController.postCouserUpdate);
// Delete 
router.get('/couser/delete/:id',couserController.getDelete);
router.post('/couser/delete/:id',couserController.postDelete);

module.exports = router;