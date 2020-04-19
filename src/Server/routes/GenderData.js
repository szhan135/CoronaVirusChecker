var express = require('express');
var router = express.Router();
const readCSVModule = require('../modules/ReadCases.js');

var allCases = readCSVModule.loadAllCases();
// Now, allCases stores list of Cases read from the csv file.

// Print first 10 ages.
for (var i = 0; i < 10; ++i){
    console.log(allCases[i].age);
}

// Get request. query paraemeters contain data from form. render search.html passing data
router.get('/search', (req, res) => {
    console.log(req.query);
    // Get respective data using the query parameters

    res.send(
        {
            data: [
                {
                    date: '01/02/2020',
                    country: 'Japan',
                    confirmed: 4,
                    recovered: 4,
                    death: 1
                },
                {
                    date: '01/03/2020',
                    country: 'China',
                    confirmed: 5,
                    recovered: 4,
                    death: 0
                },
                {
                    date: '01/04/2020',
                    country: 'US',
                    confirmed: 6,
                    recovered: 4,
                    death: 10
                }
            ],
        
        }
    );
});

module.exports = router;
