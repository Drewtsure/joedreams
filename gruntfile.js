module.exports = function(grunt){

  require("load-grunt-tasks")(grunt);

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
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'})
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'csscomb', 'postcss']
      }
    }
  });
};
