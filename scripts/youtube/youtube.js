const { google } = require("googleapis");
const path = require("path");
const { authenticate } = require("@google-cloud/local-auth");

const youtube = google.youtube("v3");

async function runSample() {
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, "../oauth2.keys.json"),
    scopes: ["https://www.googleapis.com/auth/youtube"],
  });
  google.options({ auth });

  const res = await youtube.search.list({
    part: "",
    q: "",
  });
  console.log(res.data);
}

if (module === require.main) {
  runSample().catch(console.error);
}
module.exports = runSample;
