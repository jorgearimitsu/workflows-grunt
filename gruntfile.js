module.exports = function(grunt) {
  grunt.initConfig({

    concat: {
      options: {
        separator: '\n\n//==================================================\n',
        banner: '//========== <%= concat.dist.dest %> ==========\n'
      },
      dist: {
        src: ['development/scripts/*.js'],
        dest: 'build/js/script.js'
      }
    },

    sass: {
      dist: {
        options: {
          sourcemap: 'none',
          style: 'compressed'
        },
        files: {
          'build/css/style.css': 'development/sass/style.scss'
        }
      }
    }

  });

  //load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['concat', 'sass']);
};
