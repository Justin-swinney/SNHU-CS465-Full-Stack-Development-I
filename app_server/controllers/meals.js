var fs = require('fs');
var mealTypes = JSON.parse(fs.readFileSync('./data/mealData.json', 'utf8'));

/* GET meals view */
const meals = (req, res) => {
    const pageTitle = process.env.MY_TITLE + ' | Meals';
    res.render('meals', { title: pageTitle, mealTypes });
};

module.exports = {
    meals
};