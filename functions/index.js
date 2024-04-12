const {onRequest} = require("firebase-functions/v2/https");
const cors = require("cors")({origin: true});
const fetch = require("node-fetch");

exports.postInputUrl = onRequest((request, response) => {
  cors(request, response, () => {
    console.log("Request Body:", request.body);
    const url = "https://cleanuri.com/api/v1/shorten";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        url: request.body.url,
      }),
    })
        .then((res) => res.json())
        .then((data) => {
          response.json(data);
        })
        .catch((err) => {
          console.error(err);
          response.status(500).send("Error");
        });
  });
});
