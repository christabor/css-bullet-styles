module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: ['sass/*.scss'],
                tasks: ['sass:all']
            }
        },
        sass: {
            all: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/bullet-styles.min.css': 'sass/bullet-styles.scss'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'watch']);
};
