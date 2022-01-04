const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcme to our homepage");
  }
  if (req.url === "/about") {
    res.end("Here is our short story");
    //   } else {
    //     res.end(
    //       `<h1>Oops!</h1>
    //     <p>We can't seem to find the page you are looking for</p>
    //     <a href="/">Back home</a>`
    //     );
  }
  //   console.log(req);
  //   res.write("Welcome to our homepage");
  //   res.end();
  //   if (req.url === "/") {
  //     res.end("Welcome to our homepage");
  //   }
  //   if (req.url === "/about") {
  //     res.end("Here is our short history");
  //   }
  //   res.end(`
  //   <h1>Ooopss!</h1>
  //   <p>Seems like you have gone lost</p>
  //   <a href="/">Go back</a>`);
});

server.listen(5000);
