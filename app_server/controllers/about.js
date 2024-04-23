var fs = require('fs');
var aboutData = JSON.parse(fs.readFileSync('./data/aboutData.json', 'utf8'));

/* GET about view */
const about = (req, res) => {
    const pageTitle = process.env.MY_TITLE + ' | About';
    res.render('about', { title: pageTitle, aboutData });
};

module.exports = {
    about
};