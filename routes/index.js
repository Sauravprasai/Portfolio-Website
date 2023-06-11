var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/project-showcase', function(req, res, next) {
  res.render('project', { title: 'Project-showcase' });
});

router.get('/contact-me', function(req, res, next) {
  res.render('contact', { title: 'Contact-Me' });
});

module.exports = router;
