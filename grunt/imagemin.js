module.exports = {
    main: {
        dynamic: {
            files: [
                {
                    expand:true,
                    cwd: 'development/',
                    src: ['**/*.jpeg'],
                    dest: 'build/img/'
                }
            ]
        }
    }
};
