module.exports = function(grunt) {
    // Load Grunt tasks declared in the package.json file
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    // Configure Grunt
    grunt.initConfig({
         jshint: {
            all: ['Gruntfile.js', 'controllers/**/*.js']
          }
    });
    grunt.registerTask('default', [
        'jshint'
    ]);
};
