var fs = require('fs');
var contactData = JSON.parse(fs.readFileSync('./data/contactData.json', 'utf8'));

/* GET contact view */
const contact = (req, res) => {
    const pageTitle = process.env.MY_TITLE + ' | Contact';
    res.render('contact', { title: pageTitle, contactData });
};

module.exports = {
    contact
};