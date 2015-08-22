/**
 * Created by ganapate on 12/2/2014.
 */
/*jslint node: true */
"use strict";
module.exports = function (grunt) {
    var taskLoader = require("load-grunt-tasks");
    taskLoader(grunt,{ pattern: ['grunt-*'] });

    var config = loadConfig('grunt-config');
    config.pkg = grunt.file.readJSON('./package.json');
    grunt.initConfig(config);

    grunt.registerTask('dev', ['ngAnnotate:app','concat:js','ngmock','uglify:js','jshint:all','cssmin','concat:css','clean:temp']);
    grunt.registerTask('default',['dev']);
};

function loadConfig(configDir){
    var config = {},
        fs = require("fs"),
        path = require("path"),
        taskName;

    fs.readdirSync(configDir).forEach(function(taskConfig){
        if(taskConfig.indexOf(".js")!=-1){
            taskName = taskConfig.replace(/\.js$/, '');
            config[taskName] = require('./' + path.join(configDir, taskName));
        }
    });
    return config;
}


