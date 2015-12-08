module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({

    sass: {
      style: {
        files: {
          "css/style.css": ["scss/style.scss"]
        }
      }
    },
    csscomb: {
      dist: {
        options: {
          config: 'csscomb.json'
        },
        files: {
          'css/style.css': ['css/style.css'],
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass,csscomb']
      }
    }
  });
};
