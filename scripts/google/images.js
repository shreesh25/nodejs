const GoogleImages = require("google-images");

const client = new GoogleImages(
  "0da6dce7ebad9fa37",
  "AIzaSyDyVQpbNKBwQfh6jJ4HzMhJtHPvMvoqUgU"
);

client
  .search("anime") //searh term
  .then((images) => {
    console.log(images);
  });

//client.search("", { page: 2 });

//client.search("", { size: "large" });
