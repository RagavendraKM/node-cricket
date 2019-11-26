var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");
var cricketSchema = require('../models/schema');
const upload = require('./excelUpload');

function excelUpload(req,res) {
    var exceltojson;
    upload(req,res,function(err){
        if(err){
          res.json({error_code:1,err_desc:err});
          return;
        }
    if(!req.file){
      res.json({error_code:1,err_desc:"No file passed"});
      return;
    }
    if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
        exceltojson = xlsxtojson;
    } else {
        exceltojson = xlstojson;
    }
    try {
        exceltojson({
          input: req.file.path,
          output: null,
          lowerCaseHeaders:true
        }, function(err,result){
            if(err) {
                return res.json({error_code:1,err_desc:err, data: null});
            }
            //console.log(result[0]);
            result.forEach(match => {
                let addMatch = new cricketSchema(match);
                //console.log(addMatch);
                addMatch.save()
                        .then(match =>  res.json("Saved"))
                        .catch(err => console.log(err))
            });
          });
    } catch (e){
        res.json({error_code:1,err_desc:"Corupted excel file"});
      }
    })
}

module.exports = excelUpload;