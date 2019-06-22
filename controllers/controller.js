const user = require('../models/user').user;

exports.createPdf = function(req, res) {
    console.log(req.body.name);
    res.status(200).json();
}