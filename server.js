const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

router.render = (req, res) => {
  if (req.method === "GET" && req.url === "/invoices") {
    setTimeout(() => {
      res.json(
        res.locals.data.map((invoice) => ({
          id: invoice.id,
          date: invoice.date,
          name: invoice.client.name,
          price: invoice.items.reduce((sum, item) => {
            const newSum = sum + item.quantity * item.price;
            return newSum;
          }, 0),
          status: invoice.status,
        }))
      );
    }, 5000);
  } else {
    res.json(res.locals.data);
  }
};

server.listen(4000, () => {
  console.log("JSON Server is running");
});
