const express = require('express');
var cors = require('cors')
const app = express();
const port = 80;
app.use(express.json());
app.use (cors())
app.get('/part01', (req, res) => {
  res.send({ sensor01: [{ suhu: 31, waktu: "2023-01-05 10:20" }, { suhu: 32, waktu: "2023-01-05 10:30" }, {suhu: 33, waktu: "2023-01-05 10:40" }] });
});
app.get('/part02', (req, res) => {
  res.send({ sensor01: 200 });
});

app.get('/part03', (req, res) => {
  res.send({ sensor01: 300 });
});

app.post('/partpost', (req, res) => {
  res.send("Data yang dikirim adalah " + req.body.suhu);
});
    //(Menyimpan ke database)

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}/`)
});


//(http://127.0.0.3/)