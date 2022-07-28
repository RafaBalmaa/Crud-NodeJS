const express = require("express");

const app = express();

app.get("/primeira-rota", (rec, res) => {
   return res.send("Acessou a primeira rota");
});

app.listen(4002, () => console.log("Funcionando na 4002"));
