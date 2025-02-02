const express = require("express");
const server = express();

//https://localhost:3000/hello?nome=felipe&idade=23
//query params= ?nome=felipe&idade=23

//http://localhost:3000/hello/id
//route params= /hello/:nome

server.get("/hello", (req, res) => {
  const { nome, idade } = req.query;
  return res.json({
    title: "hello world",
    message: `ola ${nome}, tudo bem?`,
    idade: idade,
  });
});

server.get("/helou/:nome/:idade", (req, res) => {
  const {nome, idade} = req.params;
  return res.json({
    title: "hello world",
    message: `ola ${nome},voce tem ${idade} anos tudo bem!?`

  });
});

server.listen(3000);

// portas : 3000,5000,8000,8080
