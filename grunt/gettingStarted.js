/*jslint node: true */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
  
    // Put plugin stuff here

  });

  grunt.loadNpmTasks('insert-grunt-plugin');

  grunt.registerTask('default', ['insert-grunt-task']);
};