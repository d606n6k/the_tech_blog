const router = require("express").Router();
const { User } = require("../../models");
// const withAuth = require('../utils/auth');

// create users

// login users

// logout user

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
