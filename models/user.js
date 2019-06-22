const orm = require('orm').connect('mysql://root:root@localhost/backend');

exports.user = orm.define('user', {
    iduser: {type: 'serial', key: true},
    firstname: String,
    lastname: String,
    image: Buffer,
    pdf: Buffer
});
