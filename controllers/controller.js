const user = require('../models/user').user;
const path = require('path');
const pdfPath = path.join(__dirname, '..', '/resources/pdf/');
const pdfkit = require('pdfkit');
const fs = require('fs');

exports.createPdf = function(req, res) {
    user.one({ firstname: req.body.name}, (err, result) => {
        if (err || result === null) {
            res.status(404).json();
        } else {
            let pdf = new pdfkit;
            pdf.pipe(fs.createWriteStream(pdfPath+''+result.firstname+'.pdf'));
            pdf.font('DejaVuSans.ttf');
            pdf.text(result.firstname + ' ' + result.lastname);
            pdf.image(result.image.buffer, {fit: [250, 300],
                align: 'center'});
            pdf.end();
            let stream = fs.ReadStream(pdfPath+''+result.firstname+'.pdf');
            let data='';
            stream
            .on('readable', () => {
                data += stream.read();
            })
            .on('end', () => {
                let temp = Buffer.from(data);
                result.pdf = temp;
                result.save((err) => {
                    if (err) {
                        console.log(err);
                        res.status(404).json();
                    } else res.status(200).json();
                });
            });
        }
    });
}