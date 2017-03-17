/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const path = require('path');

module.exports = {
  serve: function(req, res) {
    res.sendfile(path.join(sails.config.appPath, 'assets', 'index.html'));
  },

  isConnected: function(req, res) {
    let session = req.session;

    if(session.authenticated) {
      res.send(200, session.user);
    } else {
      res.send(400);
    }
  },

	login: function(req, res) {
    let data = req.body;

    User.findOne({username: data.username, password: data.password}).then((user) => {
      req.session.authenticated = true;
      req.session.user = user;

      res.send(200, user);
    }).catch((err) => {
      res.send(400);
    });
  },

  signup: function (req, res) {
    let data = req.body;

    User.create(data).then((user) => {
      req.session.authenticated = true;
      req.session.user = user;

      res.send(201, user);
    }).catch((err) => {
      res.send(500, err);
    });
  }
};

