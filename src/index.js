import Router from 'router';
import queryString from 'query-string';
import Q from 'q';
import { env } from './helper';
import fetch from 'node-fetch';

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
  const response = await fetch('https://api.github.com/users/github');
  const data = await response.json();
  res.end(JSON.stringify(data))
});

// Sample HTTP Request with Parameters
app.get('/sayHello/:name', (req, res) => {
  res.end(`Hello ${req.params.name}`);
});


