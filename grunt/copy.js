module.exports = {
    main: {
        files: [
            {
                cwd: 'development/js/libs',
                src: '**/*',
                dest: 'build/js/libs',
                expand: true
            },
            {
                cwd: 'development/img',
                src: '**/*',
                dest: 'build/img',
                expand:true
            },
            {
                src: 'development/json/gridContent.json',
                dest: 'build/json/gridContent.json'
            },
            {
                src: 'development/index.html',
                dest: 'build/index.html'
            }
        ]
    }
};
