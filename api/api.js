const express = require('express');
const router = express.Router();
const excelUpload = require('../controllers/api.controller')
const getYears = require('../controllers/getAll.controller')
const getMatchDetails = require('../controllers/getMatchDetails.controller')
const getMatchesOfSeason = require('../controllers/getMatchesOfSeason.controller')

router.post('/upload', (req,res) => {
    excelUpload(req,res);
})

 router.get('/seasons', async (req,res) => {
    await getYears(req,res);
})

router.get('/seasons/:year' , async (req,res) => {
    await getMatchesOfSeason(req,res);
})

router.get('/match/:id', (req,res) => {
    getMatchDetails(req,res);
})

module.exports = router;