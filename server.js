const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, '/')));
// const rp = require('request-promise');

const EC2ports = {
  purchase: 'http://ec2-54-183-159-221.us-west-1.compute.amazonaws.com/',
  stockValue: 'http://ec2-18-223-123-181.us-east-2.compute.amazonaws.com/',
  related: 'http://ec2-35-171-21-23.compute-1.amazonaws.com/',
  fiftytwo: 'http://ec2-54-67-20-76.us-west-1.compute.amazonaws.com/',
};

app.all('/purchase/*', function(req, res) {
  apiProxy.web(req, res, {
    target: EC2ports.purchase,
  });
});

app.all('/related/*', function(req, res) {
  apiProxy.web(req, res, {
    target: EC2ports.related
  })
})

app.all('/chart/*', function(req, res) {
  apiProxy.web(req, res, {
    target: EC2ports.stockValue
  })
})

app.all('/range/*', function(req, res) {
  apiProxy.web(req, res, {
    target: EC2ports.fiftytwo
  })
})

app.listen(port, () => {
  console.log(`successfully connected at port ${port}`);
});

// app.get('/companies/:id', (req, res) => {
//   const companyId = req.params.id;
//   rp.get(`${EC2ports.purchase}/${companyId}`)
//     .then((data) => { res.send(data); });
// });

// app.get('/companiesKatie/:id', (req, res) => {
//   const companyId = req.params.id;
//   rp.get(`${EC2ports.related}/companiesKatie/${companyId}`)
//     .then((data) => { res.send(data); });
// });

// app.get('/stocks/:id', (req, res) => {
//   const companyId = req.params.id;  
//   rp.get(`${EC2ports.stockValue}/stocks/${companyId}`)
//     .then((data) => { console.log(data); res.send(data); });
// });


// app.get('/companiesJim/:id', (req, res) => {
//   const companyId = req.params.id;
//   rp.get(`${EC2ports.stockValue}/companiesJim/${companyId}`)
//     .then((data) => { res.send(data); });
// });

// app.get('/company/:id', (req, res) => {
//   const companyId = req.params.id;
//   rp.get(`${EC2ports.fiftytwo}/company/${companyId}`)
//     .then((data) => { res.send(data); });
// });
