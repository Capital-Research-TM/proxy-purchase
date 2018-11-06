module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws_s3: {
      options: {
        accessKeyId: null, //string
        secretAccessKey: null, //string
        bucket: null, //string bucket name
        endpoint: null, //string
      },
      files: []
    }
  })

  grunt.loadNpmTasks('grunt-aws-s3');
}