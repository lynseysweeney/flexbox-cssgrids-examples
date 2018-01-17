define([
   'jquery',
   'underscore',
   'backbone',
   'text!views/header/Header.html',
], function($, _, Backbone, HeaderTemplate){
    
  var HeaderView = Backbone.View.extend({

    initialize:function()
    {
        this.render();
    },
    
    render:function()
    {
        $(this.el).html(_.template(HeaderTemplate));
    },
    
    removeView:function()
    {
        $(this.el).empty();
    }
    
  });
  return HeaderView;
});