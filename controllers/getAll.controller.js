var cricketSchema = require('../models/schema');

function getAllMatches(req, res) {
    console.log("Into All");
    cricketSchema.find((err, match) => {
        if (err) { 
            console.log(err) 
        }
        else { 
            res.json(match) 
        }
    })
}

module.exports = getAllMatches;