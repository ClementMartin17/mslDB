module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    exec: {
      db_win_make_directory: {
        command: 'mkdir data\\mongo-db'
      },
      db_win_start_db: {
        command: 'start /b "" mongod.exe --dbpath data/mongo-db'
      },
      db_win_clear_directory: {
        command: 'rmdir /Q /S data\\mongo-db'
      },
      db_win_stop_db: {
        command: 'mongo.exe admin --eval "db.shutdownServer()"'
      },
      db_win_import_astromons: {
        command: 'mongoimport.exe --db msl --collection astromons --file data\\import-data\\astromons.json'
      },
      win_start_server: {
        command: 'start /b "" node api\\server.js'
      },
      win_stop_server: {
        command: 'for /f "tokens=5" %a in (\'netstat -aon ^| findstr "LISTENING" ^| findstr "3000"\') do taskkill /F /PID %a'
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('db-import-data', ['exec:db_win_import_astromons']);
  grunt.registerTask('db-init', ['exec:db_win_make_directory', 'exec:db_win_start_db', 'db-import-data']);
  grunt.registerTask('db-start', ['exec:db_win_start_db']);
  grunt.registerTask('db-stop', ['exec:db_win_stop_db']);
  grunt.registerTask('db-clear', ['exec:db_win_clear_directory']);

  grunt.registerTask('api-start', ['exec:win_start_server']);
  grunt.registerTask('api-stop', ['exec:win_stop_server']);
  grunt.registerTask('api-restart', ['api-stop', 'api-start']);

  grunt.registerTask('all-init', ['db-start', 'api-start']);
  grunt.registerTask('all-start', ['db-start', 'api-start']);
  grunt.registerTask('all-restart', ['api-stop', 'db-stop', 'db-start', 'api-start']);
  grunt.registerTask('all-stop', ['api-stop', 'db-stop']);
};
