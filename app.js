const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  }
  if (req.url === "/about") {
    res.end("About page");
  }
  res.end("Error page");
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});

// const { readFile } = require("fs");

// console.log("started a first task");

// // Check file path

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
//   console.log("completed first task");
// });
// console.log("starting next task");
