module.exports = function(grunt){

	
grunt.registerTask('default', 'man for default'  ,function(){
  grunt.log.writeln('Default invoked' );
});

grunt.registerTask('greet', function(name){
  grunt.log.writeln('Hi there, ' + name);
});


grunt.registerTask('all', ['default', 'greet:vikram']);


}
