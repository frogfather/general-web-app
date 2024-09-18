import express from "express";
import https  from "https";
import fs from "fs";
import path from "path";
const port = 8080;
const app = express();

app.route("/")
.get( (req, res) => {
    res.send("Hello World!");
});

app.route("/home")
.get( (req, res) => {
    res.send("Hello Home!");
});


(async () => {
    https.createServer(
      {
        key: fs.readFileSync("key.pem"),
        cert: fs.readFileSync("cert.pem")
      },
      app
    ).listen(port, async () => {
      console.log(`Express is listening at https://localhost:${port}`);
    });
  })();
  