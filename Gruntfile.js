module.exports = function(grunt) {
// Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

// Configure Grunt
    grunt.initConfig({

// Grunt express - our webserver
// https://github.com/blai/grunt-express
        express: {
            all: {
                options: {
                    bases: ['.'],
                    port: 8080,
                    hostname: "0.0.0.0",
                    livereload: true
                }
            }
        },

// grunt-watch will monitor the projects files
// https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            all: {
                files: '**/*.html',
                options: {
                    livereload: true
                }
            }
        },

// grunt-open will open your browser at the project's URL
// https://www.npmjs.org/package/grunt-open
        open: {
            all: {
                path: 'http://localhost:8080/index.html'
            }
        }
    });

// Creates the `server` task
    grunt.registerTask('server', [
        'express',
        'open',
        'watch'
    ]);
};
