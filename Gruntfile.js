module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            livereload: {
                files: ['out/**/*'],
                options: { livereload: true}
            }

        }

    });

    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks("grunt-contrib-watch");


};
