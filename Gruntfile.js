/// <reference path="./typings/index.d.ts" />

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        includeSource: {
            options: {
                basePath: 'app',
                html: {
                    js: '<script src="{filePath}"></script>',
                    css: '<link rel="stylesheet" type="text/css" href="filePath" />'
                }
            },
            myTarget: {
                files: {
                    'app/index.html': 'app/index.tpl.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-include-source');

    // Default task(s).
    grunt.registerTask('default', ['includeSource']);
};
