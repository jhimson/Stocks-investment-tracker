const fetch = require('node-fetch');
const moment = require('moment');
const fetchTopHeadlines = async (req, res) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.APIKEY3}`
    );

    const { articles } = await response.json();

    if (articles) {
      let formatedArticles = articles.map(article => {
        article.publishedAt = moment(article.publishedAt).startOf('hour').fromNow(); 
      })
      res.render('news/index', { articles });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  fetchTopHeadlines,
};
