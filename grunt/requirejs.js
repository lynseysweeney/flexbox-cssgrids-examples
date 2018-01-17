module.exports = {
    main:{
        options:{
            name:'main',
            mainConfigFile:'development/js/main.js',
            optimize:'uglify2',
            preserveLicenceComments:true,
            generateSourceMaps:true,
            paths:{
                'libs/backbone':'empty',
                'libs/jquery':'empty', 
                'libs/require':'empty', 
                'libs/underscore':'empty'
            },
            out:'build/js/main.js'
        }
    }
};
