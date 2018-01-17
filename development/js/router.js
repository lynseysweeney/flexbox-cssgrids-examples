define([
  'jquery',
  'underscore',
  'backbone',
  'views/MainPageView'
  
], function($, _, Backbone, MainPageView){
    
  var Router = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      
      // Default
      '*actions': 'defaultRoute'
    },
    
    defaultRoute:function()
    {
        var page = new MainPageView();
    }
    
  });

  var initialize = function()
  {
    var router = new Router;
    Backbone.history.start();
  };
  
  return {
    initialize: initialize
  };
});