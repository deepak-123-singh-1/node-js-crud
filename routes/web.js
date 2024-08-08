const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

    router.get('/', studentController.getAllStudent);
    router.get('/create', studentController.createForm);
    router.post('/store', studentController.createFormStore);

module.exports = router;