const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(""); //Private Key
search.json(
  {
    q: "",
    location: "",
  },
  (result) => {
    console.log(result);
  }
);
