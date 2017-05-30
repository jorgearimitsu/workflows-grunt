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
    }

  });

  //load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);
};
