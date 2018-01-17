define([
   'jquery',
   'underscore',
   'backbone',
   'text!views/gallery/GalleryImage.html',
], function($, _, Backbone, GalleryImageTemplate){
    
  var GalleryImageView = Backbone.View.extend({
    
    className:'gallery-image-view',
    initialize:function()
    {
        this.template = _.template(GalleryImageTemplate);
        this.render();
    },
    
    render:function()
    {
        $(this.el).html(this.template(this.model.toJSON()));
    },
    
    removeView:function()
    {
        $(this.el).empty();
    }
    
  });
  return GalleryImageView;
});