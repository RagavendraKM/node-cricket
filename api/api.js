const express = require('express');
const router = express.Router();
const excelUpload = require('../controllers/api.controller')
const getAllMatches = require('../controllers/getAll.controller')
const getMatchDetails = require('../controllers/getMatchDetails.controller')

router.post('/upload', (req,res) => {
    excelUpload(req,res);
})

router.get('/matches', (req,res) => {
    getAllMatches(req,res);
})

router.get('/match/:id', (req,res) => {
    getMatchDetails(req,res);
})

module.exports = router;