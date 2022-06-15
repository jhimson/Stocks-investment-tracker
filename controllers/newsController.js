const fetch = require('node-fetch');

const fetchTopHeadlines = async (req, res) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.APIKEY3}`
    );

    const { articles } = await responsePrice.json();

    if (articles) {
      res.render('news/index');
    }
  } catch (error) {
    res.status(500).json({});
  }
};

module.exports = {
  fetchTopHeadlines,
};
