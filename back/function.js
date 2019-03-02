const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.apikey}.base(process.env.base));


exports.helloGET = (req, res) => {
    res.send('Hello');
}

exports.register = (req, res) => {
    switch (req.method) {
        case 'POST':
            base('Registration').create({
                "Name": req.body.name,
                "Surname": req.body.surname,
                "Mobile No.": req.body.mobile,
                "University": req.body.university,
                "Year": req.body.year,
                "Sex": req.body.sex,
                "T-shirt Size": req.body.shirtsize,
                "Food Allergy": req.body.allergy,
                "Event Expectations": req.body.expectation
            }, function (err, record) {
                if (err) {
                    res.status(500).send(err);
                }

                res.send(record);
            });
            break;
    }
}