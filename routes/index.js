const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Multi colour + images
router.get('/multic', ensureAuthenticated, (req, res) =>
  res.render('multic', {
    user: req.user
  })
);

// Multi colour + images
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

// Handloom
router.get('/handloom', ensureAuthenticated, (req, res) =>
  res.render('handloom', {
    user: req.user
  })
);

// Gents
router.get('/males', ensureAuthenticated, (req, res) =>
  res.render('males', {
    user: req.user
  })
);

// Single colour
router.get('/single', ensureAuthenticated, (req, res) =>
  res.render('singlecolor', {
    user: req.user
  })
);

// Multi colour
router.get('/multicolorwithout', ensureAuthenticated, (req, res) =>
  res.render('multicolorwithout', {
    user: req.user
  })
);

// Double colour
router.get('/double', ensureAuthenticated, (req, res) =>
  res.render('double', {
    user: req.user
  })
);

// Double colour + models
router.get('/doublewith', ensureAuthenticated, (req, res) =>
  res.render('doublewith', {
    user: req.user
  })
);

// Flexo
router.get('/jeans', ensureAuthenticated, (req, res) =>
  res.render('jeans', {
    user: req.user
  })
);

// Flexo
router.get('/flexo', ensureAuthenticated, (req, res) =>
  res.render('flexo', {
    user: req.user
  })
);

// Double colour + models
router.get('/jewellery', ensureAuthenticated, (req, res) =>
  res.render('jewellery', {
    user: req.user
  })
);

// Double colour + models
router.get('/mobile', ensureAuthenticated, (req, res) =>
  res.render('mobile', {
    user: req.user
  })
);

// Double colour + models
router.get('/marriage', ensureAuthenticated, (req, res) =>
  res.render('marriage', {
    user: req.user
  })
);

// Double colour + models
router.get('/mobile', ensureAuthenticated, (req, res) =>
  res.render('mobile', {
    user: req.user
  })
);

// Double colour + models
router.get('/shoes', ensureAuthenticated, (req, res) =>
  res.render('shoes', {
    user: req.user
  })
);

// Double colour + models
router.get('/sweets', ensureAuthenticated, (req, res) =>
  res.render('sweets', {
    user: req.user
  })
);

// Double colour + models
router.get('/kids', ensureAuthenticated, (req, res) =>
  res.render('kids', {
    user: req.user
  })
);

module.exports = router;
