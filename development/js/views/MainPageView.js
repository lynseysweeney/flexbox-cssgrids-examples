define([
   'jquery',
   'underscore',
   'backbone',
   'data/models/GridContentModel',
   'views/header/HeaderView',
   'views/gallery/GalleryView',
   'text!views/MainPage.html'
], function($, _, Backbone, GridContentModel, HeaderView, GalleryView, MainPageTemplate){
    
  var MainPageView = Backbone.View.extend({
    
    el:'#page-content',
    gridContent:null,
    headerView:null,
    galleryView:null,
    initialize:function()
    {
        this.gridContent = new GridContentModel();
        this.listenTo(this.gridContent, 'sync', this.renderGridContent)
        this.render();
    },
    
    render:function()
    {
        $(this.el).html(_.template(MainPageTemplate));
        this.headerView = new HeaderView({el:$(this.el).find('.top-level-header')});
        this.gridContent.fetch();
    },
    
    renderGridContent:function()
    {
        this.galleryView = new GalleryView({el:$(this.el).find('.grid-container'), model:this.gridContent});
    },
    
    removeView:function()
    {
        $(this.el).empty();
    }
    
  });
  return MainPageView;
});