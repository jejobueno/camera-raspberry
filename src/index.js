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
  context.http.request(({
    url: 'http://127.0.0.1:5000/',
    success: function(r) {
      //res.end(JSON.stringify(JSON.parse(r.data), null, 2));
      res.end(r.data)
    },
  }));
});

// Sample HTTP Request
app.get('/detect', (req, res) => {
  context.http.request(({
    url: 'http://127.0.0.1:5000/detect',
    success: function(r) {
      res.end(r.data)
    },
  }));
});



