const express = require("express");
const cors = require("cors");
const db = require("./database");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());
app.get("/prontuario", (req, res) => res.send("Hello Medical report API"));
app.get("/prontuario/get", async (req, res) => {
  const response = await db.query("select * from prontuario limit 1");
  console.log(response.rows);
  res.json({
    data: response.rows,
  });
});
app.post("/prontuario", async (req, res) => {
  const { name, age, situation } = req.body;
  const { rows } = await db.query(
    "UPDATE prontuario set (nome,idade,situacao) = ($1, $2,$3)",
    [name, age, situation]
  );
  res.status(201).send({
    message: "Prontuario adicionado com sucesso!",
    body: {
      product: { name, age, situation },
    },
  });
});

app.listen(3001, () =>
  console.log(`Medical report API listening on port 3001!`)
);
