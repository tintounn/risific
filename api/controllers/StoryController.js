/**
 * StoryController
 *
 * @description :: Server-side logic for managing stories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function(req, res) {
    Story.find().then((stories) => {
      res.send(200, stories);
    }).catch((err) => {
      res.send(500, err);
    });
  },

  findOne: function(req, res) {
    let id = req.params.id;

    Story.findOne({id: id}).then((story) => {
      res.send(200, story);
    }).catch((err) => {
      res.send(500, err);
    });
  },

  create: function(req, res) {
    let data = req.body;

    Story.create(data).then((story) => {
      res.send(201, story);
    }).catch((err) => {
      res.send(500, err);
    });
  },

  delete: function(req, res) {
    let id = req.params.id;

    Story.destroy({id: id}).then(() => {
      res.send(200);
    }).catch((err) => {
      res.send(500, err);
    });
  }
};

