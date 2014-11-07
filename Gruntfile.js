module.exports = function(grunt){

// Project configuration.
grunt.initConfig({
  concat: {
    dist: {
      src: ['src/js/datas.js', 'src/js/kinetic-v5.1.0.min.js', 'src/js/canvas.js'],
      dest: 'dist/js/main.js'
    },

  },

copy: {
  main: {
    expand: true,
    cwd: 'src/',
    src: 'img/*',
    dest: 'dist/img',
    flatten: true,
    filter: 'isFile',
  },
},

watch: {
  scripts: {
    files: 'src/js/*.js',
    tasks: ['default'],
    options: {
      interrupt: true,
    },
  },
},

  uglify: {
    my_target: {
      files: {
        'dist/js/main.min.js': ['src/js/datas.js']
      }
    }
  }

})

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat:dist', 'copy:main', 'uglify:my_target'])


}