const GoogleImages = require("google-images");
const GoogleNewsRss = require("google-news-rss");
var scraper = require("google-search-scraper");

var options = {
  query: "nodejs",
  limit: 10,
};

module.exports = (app) => {
  app.get("/search/images", (req, res, next) => {
    const client = new GoogleImages(
      "0da6dce7ebad9fa37",
      "AIzaSyDyVQpbNKBwQfh6jJ4HzMhJtHPvMvoqUgU"
    );

    client
      .search("anime") //searh term
      .then((images) => {
        console.log(images);
      });
  });

  app.get("/search/news", (req, res, next) => {
    const googleNews = new GoogleNewsRss();

    googleNews
      .search("anime") //search term
      .then((resp) => console.log(resp));
  });

  app.get("/search", (req, res, next) => {
    scraper.search(options, (err, url, meta) => {
      // This is called for each result
      if (err) throw err;
      console.log(url);
      console.log(meta.title);
      console.log(meta.meta);
      console.log(meta.desc);
    });
  });
};
