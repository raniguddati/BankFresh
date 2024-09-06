
const express = require('express');

const{registerCard}=require('../controllers/card')

const router = express.Router();

router.post('/add-card',registerCard)

module.exports = router;
