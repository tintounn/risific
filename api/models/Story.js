/**
 * Story.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    titre: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    image: {
      type: 'string'
    },
    chapters: {
      collection: 'chapter',
      via: 'story'
    },
    owner: {
      model: 'user'
    }
  }
};

