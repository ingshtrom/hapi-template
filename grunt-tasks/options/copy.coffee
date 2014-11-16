module.exports = {
  main: {
    files: [
      {
        expand: true,
        cwd: '<%= gruntConfig.srcDir %>',
        src: ['**/*.js'],
        dest: '<%= gruntConfig.pubDir %>',
        filter: 'isFile'
      }
    ]
  }
}
