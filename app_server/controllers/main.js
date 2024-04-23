var fs = require('fs');
var mainPageData = JSON.parse(fs.readFileSync('./data/mainPageData.json', 'utf8'));

const index = (req, res) => {
    const pageTitle = process.env.MY_TITLE; // Process title from package.json into tab title 
    res.render('index', {title: 'Travlr Getaways', mainPageData});
};

module.exports = {
    index
};