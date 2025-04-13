var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let appInsights = req.app.get('appInsights')
  appInsights.trackEvent({ name: "serverCount" })
  res.render('index', { title: 'Express' });
});

module.exports = router;
