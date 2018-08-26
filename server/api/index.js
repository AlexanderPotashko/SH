import express from 'express';
// import fetch from 'isomorphic-fetch';

import _fakeFetch_ from './utils';

const apiRouter = express.Router();

apiRouter.use('/api/auth', (req, res) => {
  const { email, password } = req.body;

  console.log('auth', email, password);

  res.send({
    token: Math.random()
      .toString(36)
      .substr(2)
  });
});

apiRouter.use('/api/booking', (req, res) => {
  console.log('/api/booking', req.body);

  res.send(_fakeFetch_(req.body));
});

export default apiRouter;
