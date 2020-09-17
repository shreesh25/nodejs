const GoogleImages = require("google-images");

const client = new GoogleImages("CSE ID", "API KEY");

client
  .search("") //searh term
  .then((images) => {});

client.search("", { page: 2 });

client.search("", { size: "large" });
