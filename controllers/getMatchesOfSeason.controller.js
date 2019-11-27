var cricketSchema = require('../models/schema');

async function getMatchesOfSeasons(req, res) {
    console.log("Into All");
    try {
        const matches = await cricketSchema.find({season : req.params.year});
        // const year = await cricketSchema.distinct("season");
        res.send(matches);
    } catch(e) {
        res.send(e);
    }
    
}

module.exports = getMatchesOfSeasons;