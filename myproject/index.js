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
let userbantime = "1y"; // y=year mo=month d=day h=hour m=minute s=second perm=permanent

let juser = "user";
let jlenght = "10";
let jtype = "1";

let suser = "user";

let muser = "user"
let mlenght = "10"

// Эндпоинт для получения значений (возвращаем в виде таблицы JSON)
app.get('/all', (req, res) => {
  res.json({ juser, jlenght, jtype, suser, muser, mlenght, var1, var2, userkick, userkickreason, userban, userbanreason, userbantime });
});

app.get('/j', (req, res) => {
  res.json({ juser, jlenght, jtype });
});

app.get('/spy', (req, res) => {
  res.json({ suser });
});

app.get('/mute', (req, res) => {
  res.json({ muser, mlenght });
});

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

app.post('/setjlenght', (req, res) => {
  const { value } = req.body;
  if (typeof value === 'number') {
    juser = value;
    res.json({ status: 'ok', var2 });
  } else {
    res.status(400).json({ error: 'Value must be a number' });
  }
});

app.post('/setjuser', (req, res) => {
  const { value } = req.body;
  if (typeof value === 'string') {
    juser = value;
    res.json({ status: 'ok', var2 });
  } else {
    res.status(400).json({ error: 'Value must be a string' });
  }
});

app.post('/setjtype', (req, res) => {
  const { value } = req.body;
  if (typeof value === 'number') {
    jtype = value;
    res.json({ status: 'ok', var2 });
  } else {
    res.status(400).json({ error: 'Value must be a number' });
  }
});

app.post('/setspy, (req, res) => {
  const { value } = req.body;
  if (typeof value === 'string' || typeof value === 'number') {
    userbantime = value;
    res.json({ status: 'ok', var2 });
  } else {
    res.status(400).json({ error: 'Value must be a string or a number' });
  }
});

app.post('/setmuser', (req, res) => {
  const { value } = req.body;
  if (typeof value === 'string' || typeof value === 'number') {
    muser = value;
    res.json({ status: 'ok', var2 });
  } else {
    res.status(400).json({ error: 'Value must be a string or a number' });
  }
});

app.post('/setmlenght', (req, res) => {
  const { value } = req.body;
  if (typeof value === 'number') {
    mlenght = value;
    res.json({ status: 'ok', var2 });
  } else {
    res.status(400).json({ error: 'Value must be a number' });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`API listening at http://0.0.0.0:${port}`);
});
