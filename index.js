const http = require("http");
const fs = require("fs");


const hostname = "127.0.0.1";
const port = 3000;
const home = fs.readFileSync("index.html");
const collections = fs.readFileSync("collections.html");
const men = fs.readFileSync("men.html");
const women = fs.readFileSync("women.html");
const about = fs.readFileSync("about.html");
const contact = fs.readFileSync("contact.html");
const user_data = fs.readFileSync("user_data.html");
const cart = fs.readFileSync("cart.html");

const server = http.createServer((req, res) => {
  console.log(req.url);
  url = req.url;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  // res.end("Hello!!");
  if (url == "/") {
    res.end(home);
  } else if (url == "/collections") {
    res.end(collections);
  } else if (url == "/men") {
    res.end(men);
  } else if (url == "/women") {
    res.end(women);
  } else if (url == "/about") {
    res.end(about);
  } else if (url == "/contact") {
    res.end(contact);
  } else {
    res.statusCode = 404;
    res.end("<h1>404 not found</h1>");
  }
});


function user_data1() {
  console.log("user_data1");
}






function minus_quantity1() {
  console.log("minus_quantity1");
  quantity-=1;
  document.getElementById('product_quantity').innerHTML = quantity;

}


function plus_quantity1() {
  console.log("plus_quantity1");
  quantity+=1;
  document.getElementById('product_quantity').innerHTML = quantity;

}


let incart =[
  "black shoe",
   "white shoe"
  ];


function add_to_cart1() {
  console.log("add to cart");

  let incart =[
    "black shoe",
     "white shoe"
    ];
  // console.log(products[incart]);
  incart.push("blue shoes premium");
  document.getElementById("products_in_cart").innerHTML = incart;

}


function cart1() {
  console.log("cart1");

  // res.end(cart);
}





server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
