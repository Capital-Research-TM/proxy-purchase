const express = require('express');
const path = require('path');
const rp = require('request-promise');

const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`successfully connected at port ${port}`);
});

app.use(express.static(path.join(__dirname, '/')));

app.get('/companies/:id', (req, res) => {
  const companyId = req.params.id;
  rp.get(`http://localhost:3001/companies/${companyId}`)
    .then((data) => { res.send(data); });
});

app.get('/companiesKatie/:id', (req, res) => {
  const companyId = req.params.id;
  rp.get(`http://localhost:3009/companiesKatie/${companyId}`)
    .then((data) => { res.send(data); });
});

app.get('/stocks/:id', (req, res) => {
  const companyId = req.params.id;  
  rp.get(`http://localhost:3004/stocks/${companyId}`)
    .then((data) => { console.log(data); res.send(data); });
});


app.get('/companiesJim/:id', (req, res) => {
  const companyId = req.params.id;
  rp.get(`http://localhost:3004/companiesJim/${companyId}`)
    .then((data) => { res.send(data); });
});

app.get('/company/:id', (req, res) => {
  const companyId = req.params.id;
  rp.get(`http://localhost:3007/company/${companyId}`)
    .then((data) => { res.send(data); });
});
