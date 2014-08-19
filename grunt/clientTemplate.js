// A template for commonly used plugins on front-end projects

/*jslint node: true */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({

    concat: {
      options: {
        separator: ';'
      },
      script: {
        src: ['js/*.js', '!js/scripts.js'],
        dest: 'js/scripts.js'
      }
    },

    jade: {
      compile: {
        options: {
          debug: false
        },
        files: {
          'index.html': ['index.jade']
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/style.css': 'css/style.scss'
        }
      }
    },

    watch: {
      scripts: {
        files: ['js/*.js', '!js/scripts.js'],
        tasks: ['concat']
      },
      jade: {
        files: ['*.jade', 'includes/*.jade'],
        tasks: ['jade']
      },
      sass: {
        files: ['css/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    },

    connect: {
      'static': {
        options: {
          hostname: 'localhost',
          port: 8000,
          keepalive: true
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          'css/style.min.css': 'css/style.css'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};