module.exports = {
  main: {
    files: [
      {
        expand: true,
        src: ['<%= gruntConfig.srcDir %>/**/*.js'],
        dest: '<%= gruntConfig.pubDir %>',
        filter: 'isFile'
      }
    ]
  }
}
