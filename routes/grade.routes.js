var express = require('express');
var router = express.Router();
var gradeController = require('../controller/grade.controller');

// show list
router.get('/grade', gradeController.getGrade);
// create 
router.get('/grade/add-grade', gradeController.getGradeCreate);
router.post('/grade/add-grade' , gradeController.postGradeCreate);
// update 
router.get('/grade/update-grade/:id' , gradeController.getGradeUpdate);
router.post('/grade/update-grade/:id' , gradeController.postGradeUpdate);
// delete 
router.get('/grade/delete-grade/:id' , gradeController.getGradeDelete);
router.post('/grade/delete-grade/:id' , gradeController.postGradeDelete);


module.exports = router;