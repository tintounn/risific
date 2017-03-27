/**
 * StoryController
 *
 * @description :: Server-side logic for managing stories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  lastest: function(req, res) {
    let limit = req.query.limit;
    let criteria = {};

    if(limit) criteria.limit = limit;
    criteria.sort = 'createdAt DESC';

    Story.find(criteria).populate('owner', {select: ['username']}).then((stories) => {
      res.send(200, stories);
    }).catch((err) => {
      res.send(500, err);
    });

  },

  mostviewed: function(req, res) {

  },

	find: function(req, res) {
    Story.find().populate('owner', {select: ['username']}).then((stories) => {
      res.send(200, stories);
    }).catch((err) => {
      res.send(500, err);
    });
  },

  findOne: function(req, res) {
    let id = req.params.id;
    let fullFind = req.query.full;
    let promise;

    if(!fullFind) {
      promise = Story.findOne({id: id});
    } else {
      promise = Story.findOne({id: id}).populate('chapters', {select: ['titre']}).populate('owner', {select: ['username']});
    }

    promise.then((story) => {
      res.send(200, story);
    }).catch((err) => {
      res.send(500, err);
    });
  },

  create: function(req, res) {
    let data = req.body;

    data.owner = req.session.user.id;

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
  },

  update: function(req, res) {
	  let id = req.params.id;
    let data = req.body;

	  delete data.id;
	  delete data.owner;

	  Story.update({id: id}, req.body).then((story) => {
      res.send(200, story);
    }).catch((err) => {
      res.send(500, err);
    });
  }
};

