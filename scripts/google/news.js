const GoogleNewsRss = require("google-news-rss");

const googleNews = new GoogleNewsRss();

googleNews
  .search("anime") //search term
  .then((resp) => console.log(resp));
