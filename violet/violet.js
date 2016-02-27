#!/usr/bin/env node

var ncp = require('ncp').ncp;
var path = require('path');

require('yargs')
    .usage('$0 <cmd> [args]')
    .option('directory', {
        alias: 'd',
        describe: 'Provide the directory to install Violet to'
    })
    .command('install', 'Install violet', {}, function (argv) {
        var directory = 'violet';
        if (argv.directory != null) {
            directory = argv.directory;
        }

        ncp(path.resolve(__dirname, './source'), directory, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log('Installed Violet!');
        });
    })
    .help('help')
    .argv;
