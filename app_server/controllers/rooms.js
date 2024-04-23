var fs = require('fs');
var roomTypes = JSON.parse(fs.readFileSync('./data/roomData.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    const pageTitle = process.env.MY_TITLE + ' | Rooms';
    res.render('rooms', { title: pageTitle, roomTypes });
};

module.exports = {
    rooms
};