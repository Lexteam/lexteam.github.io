#!/usr/bin/env node

require('yargs')
    .usage('$0 <cmd> [args]')
    .option('directory', {
        alias: 'd',
        describe: 'Provide the directory to install Violet to'
    })
    .command('install', 'Install violet', {}, function (argv) {
        if (argv.directory != null) {
            console.log('Hi there ' + argv.directory);
        } else {
            console.log('Hi there');
        }
    })
    .help('help')
    .argv;
