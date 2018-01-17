define([
    'underscore',
    'backbone'
    
], function(_, Backbone) {

    var GridImageModel = Backbone.Model.extend({
        defaults:{
            id:null,
            title:"",
            filename:"",
            description:""
        }
       
    });
    return GridImageModel;
});
