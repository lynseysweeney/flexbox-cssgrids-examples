define([
    'underscore',
    'backbone',
    'data/models/GridImageModel'
    
], function(_, Backbone, GridImageModel) {

    var GridImageCollection = Backbone.Collection.extend({
       model:GridImageModel
    });
    return GridImageCollection;
});
