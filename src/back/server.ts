import express from "express";
import { Express } from "express";
import cors from "cors";
import mysql from "mysql2";
import bodyParser from "body-parser";

interface IStock {
  mailingName: string;
  date: string;
  quantity: number;
}

const PORT = 3001;

const pool = mysql
  .createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "mysql",
    database: "mydb",
  })
  .promise();

async function getStocks() {
  const [resuls] = await pool.query("SELECT * FROM table1");
  return resuls;
}

async function addStocks(data: IStock) {
  const [resuls] = await pool.query(
    `INSERT INTO table1 (mailingName, date, quantity) VALUES ('${data.mailingName}','${data.date}',${data.quantity})`
  );
  return resuls;
}

async function deleteStocks(id: number) {
  const [resuls] = await pool.query(`DELETE FROM table1 WHERE id = ${id}`);
  return resuls;
}

// Для моделирования нагрузки
const delay = (ms: number) => {
  return new Promise((res) =>
    setTimeout(() => {
      console.log(`Задкржка ${ms}...`);
      res(ms);
    }, ms)
  );
};

const app: Express = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.get("/api/stocks", cors(), (req, res) => {
  async function send() {
    await delay(1000);
    const stocks = await getStocks();
    console.log(stocks);
    res.json(stocks);
  }
  send();
});

app.post("/api/stocks/add", bodyParser.json(), function (req, res) {
  console.log("body is ", req.body);
  async function send() {
    const result = await addStocks(req.body);
    const stocks = await getStocks();
    console.log(result);
    res.send(stocks);
  }
  send();
});

app.post("/api/stocks/delete", bodyParser.json(), function (req, res) {
  console.log("body is ", req.body);
  async function send() {
    const result = await deleteStocks(req.body.id);
    const stocks = await getStocks();
    console.log(result);
    res.send(stocks);
  }
  send();
});

app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT} port...`);
});
