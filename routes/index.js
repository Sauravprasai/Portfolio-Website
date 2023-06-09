var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Saurav\'s Portfolio' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

router.get('/project-showcase', function(req, res, next) {
  res.render('project', { title: 'Project showcase' });
});

router.get('/contact-me', function(req, res, next) {
  res.render('contact', { title: 'Contact me' });
});

module.exports = router;
