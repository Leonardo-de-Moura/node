const express = require("express");
const server = express();

server.use(express.json());

let customers = [
  {
    id: 1, name: "random", site: "http://blbla.com"
  }, {
    id: 2, name: "random2", site: "http://blbla.com2"
  }, {
    id: 3, name: "random3", site: "http://blbla.com3"
  }
];

server.get("/customers", (req, res) => {
  return res.json(customers);
});

server.get("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const customer = customers.find(item => item.id === id);
  const status = customer ? 200 : 404;
  return res.status(status).json(customer);

});

server.post("/customers", (req, res) => {
  const { name, site } = req.body;
  const nextId = customers[customers.length - 1].id + 1;
  const newCustomer = {id, name, site};

  customers.push(newCustomer);

  return res.status(201).json(newCustomer);
});

server.listen(3000);

