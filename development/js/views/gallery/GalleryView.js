define([
   'jquery',
   'underscore',
   'backbone',
   'views/gallery/GalleryImageView',
   'text!views/gallery/Gallery.html',
], function($, _, Backbone, GalleryImageView, GalleryTemplate){
    
  var GalleryView = Backbone.View.extend({
    
    initialize:function(options)
    {
        this.listenTo(this.model, 'change:galleryType', this.render);
        this.template = _.template(GalleryTemplate);
        this.render();
    },
    
    events:{
        'click button':"onViewTypeToggle"
    },

    render: function()
    {
        this.removeView();
        var data = this.model.toJSON();
        data.galleryTypeTitle = this.model.getGalleryTypeTitle();
        $(this.el).html(this.template(data));
        var gridElement = $(this.el).find('.grid-gallery');
        if (this.model.get('galleryType') === 'grid-example' && !(typeof document.getElementById('page-content').style.grid === 'string'))
        {
            gridElement.html('<h3 class=no-grids">This browser does not support CSS Grids</h3>');
        }
        else
        {
            _.each(this.model.get('images').models, function(image) {
                var imageView = new GalleryImageView({model: image});
                gridElement.append(imageView.$el)
            })
        }
    },
    
    onViewTypeToggle: function(event)
    {
        this.model.set('galleryType', event.currentTarget.id);
    },

    removeView:function()
    {
        $(this.el).empty();
    }
    
  });
  return GalleryView;
});