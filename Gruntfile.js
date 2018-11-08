// eslint-disable-next-line func-names
module.exports = function (grunt) {
  grunt.initConfig({
    aws: grunt.file.readJSON('aws-keys.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>',
        region: 'us-west-1',
        bucket: 'robinhood-proxy-purchase',
      },
      files: {
        action: 'upload',
        expand: true,
        cwd: '../service-purchase/client/dist',
        src: 'bundle.js',
      },
    },
    watch: {
      js: {
        files: 'bundle.js',
        tasks: ['aws_s3'],
        options: {
          cwd: {
            files: '../service-purchase/client/dist',
          },
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['aws_s3']);
};
