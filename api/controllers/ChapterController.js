/**
 * ChapterController
 *
 * @description :: Server-side logic for managing chapters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function(req, res) {
    Chapter.find(req.params.all()).then((chapters) => {
      res.send(200, chapters);
    }).catch((err) => {
      res.send(500, err);
    });
  },

  findOne: function(req, res) {

	  console.log(req.params.all());

    Chapter.findOne(req.params.all()).then((chapter) => {
      res.send(200, chapter);
    }).catch((err) => {
      res.send(500, err);
    });
  },

  create: function(req, res) {
    let data = req.body;

    data.story = req.params.story;

    Chapter.create(data).then((chapter) => {
      res.send(201, chapter);
    }).catch((err) => {
      res.send(500, err);
    });
  },

  delete: function(req, res) {
    Chapter.destroy(req.params.all()).then(() => {
      res.send(200);
    }).catch((err) => {
      res.send(500, err);
    });
  },

  update: function(req, res) {
	  let data = req.body;

	  delete data.story;
    delete data.id;

	  Chapter.update(req.params.all(), data).then((chapter) => {
      res.send(200, chapter);
    }).catch((err) => {
	    res.send(500, err);
    });
  }
};

