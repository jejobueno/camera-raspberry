import Router from 'router';
import queryString from 'query-string';
import Q from 'q';
import { env } from './helper';

const app = Router({
  mergeParams: true,
});

mimikModule.exports = (context, req, res) => {
  global.context = context;
  app(req, res, (e) => {
    res.end(JSON.stringify({ code: e ? 400 : 404, message: e || 'Not Found' }));
  });
};

// Sample HTTP Request
app.get('/', (req, res) => {
  const PiCamera = require('pi-camera');
  const myCamera = new PiCamera({
    mode: 'photo',
    width: 640,
    height: 480,
    nopreview: true,
  });

  myCamera.snapDataUrl()
    .then((result) => {
    // Your picture was captured
    res.end('<img src="${result}">');
    })
    .catch((error) => {
     // Handle your error
    });
});

// Sample HTTP Request to return the environment variables
app.get('/env', (req, res) => {
  res.end(JSON.stringify(env()));
});

// Sample HTTP Request with Parameters
app.get('/sayHello/:name', (req, res) => {
  res.end(`Hello ${req.params.name}`);
});

// Sample HTTP Request with Query
app.get('/add', (req, res) => {
  const query = queryString.parse(req._parsedUrl.query);
  res.end(`result is ${Number(query.x) + Number(query.y)}`);
});

// Sample Promise with Q
app.get('/promise', (req, res) => {
  const simplePromise = Q.Promise((resolve) => {
    resolve('From the Q promise.');
  });
  simplePromise.then(answer => res.end(answer));
});

// Sample HTTP request with JSON Body and return it
app.post('/form', (req, res) => {
  res.end(req.body);
});
