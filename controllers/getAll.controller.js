var cricketSchema = require('../models/schema');

async function getYears(req, res) {
    console.log("Into Seasons");
    try {
        const year = await cricketSchema.distinct("season");
        res.send(year);
    } catch(e) {
        res.send(e);
    }
    
}

module.exports = getYears;