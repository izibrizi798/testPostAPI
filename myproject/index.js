const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // чтобы принимать JSON в теле запросов

// Переменные (храним в памяти)
let var1 = "значение1";
let var2 = "значение2";

let userkick = "user";
let userkickreason = "1234";

let userban = "user";
let userbanreason = "1234";
let userbantime = "1y"; // y=year m=month d=day h=hour m=minute s=second perm=permanent

// Эндпоинт для получения значений (возвращаем в виде таблицы JSON)
app.get('/vars', (req, res) => {
  res.json({ var1, var2 });
});

app.get('/kicksbans', (req, res) => {
  res.json({ userkick, userkickreason, userban, userbanreason, userbantime });
});

// Эндпоинты для изменения значений
// Меняем var1
app.post('/setVar1', (req, res) => {
  const { value } = req.body;
  if (typeof value === 'string') {
    var1 = value;
    res.json({ status: 'ok', var1 });
  } else {
    res.status(400).json({ error: 'Value must be a string' });
  }
});

// Меняем var2
app.post('/setVar2', (req, res) => {
  const { value } = req.body;
  if (typeof value === 'string') {
    var2 = value;
    res.json({ status: 'ok', var2 });
  } else {
    res.status(400).json({ error: 'Value must be a string' });
  }
});

app.post('/setUserkick', (req, res) => {
  const { value } = req.body;
  if (typeof value === 'string' || typeof value === 'number') {
    userkick = value;
    res.json({ status: 'ok', var2 });
  } else {
    res.status(400).json({ error: 'Value must be a string or a number' });
  }
});

app.post('/setUserkickreason', (req, res) => {
  const { value } = req.body;
  if (typeof value === 'string') {
    userkickreason = value;
    res.json({ status: 'ok', var2 });
  } else {
    res.status(400).json({ error: 'Value must be a string' });
  }
});

app.post('/setUserban', (req, res) => {
  const { value } = req.body;
  if (typeof value === 'string' || typeof value === 'number') {
    userban = value;
    res.json({ status: 'ok', var2 });
  } else {
    res.status(400).json({ error: 'Value must be a string or a number' });
  }
});

app.post('/setUserbanreason', (req, res) => {
  const { value } = req.body;
  if (typeof value === 'string') {
    userbanreason = value;
    res.json({ status: 'ok', var2 });
  } else {
    res.status(400).json({ error: 'Value must be a string' });
  }
});

app.post('/setUserbantime', (req, res) => {
  const { value } = req.body;
  if (typeof value === 'string' || typeof value === 'number') {
    userbantime = value;
    res.json({ status: 'ok', var2 });
  } else {
    res.status(400).json({ error: 'Value must be a string or a number' });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`API listening at http://0.0.0.0:${port}`);
});
