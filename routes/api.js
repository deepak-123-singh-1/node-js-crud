const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');




router.get('/student', studentController.getAllStudent);
router.post('/student/create', studentController.createStudent);



module.exports = router;