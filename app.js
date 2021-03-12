/**
 * const http = require("http");
 var usersInfo = ["Varun", "Harsha", "Ram"];

http
  .createServer((req, res) => {
    res.writeHead(200);
    if (req.url === "/users") {
      res.end(JSON.stringify(usersInfo));
    } else if (req.url.includes("/users")) {
      var urlId = req.url.split("/");
      console.log("URLID", urlId);
      res.end(usersInfo[parseInt(urlId[2])]);
    } else {
      res.writeHead(404);
      res.end(`Method ${req.method} ${req.url} not found`);
    }
  })
  .listen(8000);

console.log(`Worker ${process.pid} started`);
*/

const express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var expressLayouts = require("express-ejs-layouts");

const app = express();
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("views", path.join(__dirname, "./src/views/"));
app.set("layouts",path.join(__dirname,"./src/views/layout/"));
app.use(express.static("public"));

const port = 8000;
const router = require("./src/routes");

const dbConfig = require("./src/db");
// app.use((req, res, next) => {
//   let rawBody = "";
//   if (req.headers["content-type"] === "application/json") {
//     req.setEncoding("utf8");

//     req.on("data", function (chunk) {
//       rawBody += chunk;
//     });
//   }
//   req.on("end", function () {
//     try {
//       req.body = JSON.parse(rawBody);
//     } catch (error) {
//       res.status(422).json({ error: true, messae: "Malformed json" });
//     }
//     next();
//   });
// });
app.use(express.json());
// app.use(bodyParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// app.use(bodyParser.json());
// app.use(bodyParser.json({ type: 'application/*+json' }));

app.get("/test", (req, res) => {
  res.send("WELCOME");
});

app.use("/", router);

app.listen(port, () => {
  console.log(`APP is listening at ${port}`);
});
