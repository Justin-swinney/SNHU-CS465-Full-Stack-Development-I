var fs = require('fs');
var newsData = JSON.parse(fs.readFileSync('./data/newsData.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    const pageTitle = process.env.MY_TITLE + ' | News';
    res.render('news', { title: pageTitle, newsData });
};

module.exports = {
    news
};