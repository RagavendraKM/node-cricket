var cricketSchema = require('../models/schema');

function getMatchDetails(req, res) {
    console.log("Into One");
    cricketSchema.findById(req.params.id , (err, match) => {
        if (err) { 
            console.log(err) 
        }
        else { 
            res.json(match) 
        }
    })
}

module.exports = getMatchDetails;