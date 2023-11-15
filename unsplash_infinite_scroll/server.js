let fetchPromise = import('node-fetch')
  .then((module) => {
    global.fetch = module.default;
  })
  .catch((err) => {
    console.error('Failed to load node-fetch', err);
  });

const config = require('universal-config');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');
const { json } = require('express');

const unsplash = new Unsplash({
    applicationId: config.get('APPLICATION_ID'),
    secret: config.get('SECRET'),
    callbackUrl: config.get('CALLBACK_URL')
  });
  
const app = express();

app.get('/api/photos', (req, res) => {
    fetchPromise.then(() => {
        unsplash.photos.listPhotos(1,30)
        .then(toJson)
        .then(json => res.json(json));
    });
});

const PORT =process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started'));
