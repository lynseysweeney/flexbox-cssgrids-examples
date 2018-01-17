define([
    'underscore',
    'backbone',
    'data/collections/GridImageCollection'
    
], function(_, Backbone, GridImageCollection) {

    var GridContentModel = Backbone.Model.extend({
        
        defaults: {
            id: null,
            title: "",
            source: "",
            images: null,
            galleryType: 'flexbox-example'
        },
        
        initialize: function()
        {
            this.listenTo(this, 'error', this.onDataError);
        },
        
        url: function() {
            return 'json/gridContent.json';
        },
        
        parse: function(response)
        {
            if (response.images)
            {
                response.images = new GridImageCollection(response.images, {parse: true});
           }
           return response;
       },
       
       getGalleryTypeTitle:function()
       {
           if(this.get('galleryType') === 'flexbox-example')
           {
               return "Flexbox";
           }
           return "CSS Grids";
       },
       
       toJSON:function()
       {
            var json = Backbone.Model.prototype.toJSON.apply(this);
            json.images = this.get('images').toJSON();
            return json;
       },
       
       onDataError:function(model, response, options)
       {
           alert("The data could not load properly. Please try again later.")
       }
    });
    return GridContentModel;
});
