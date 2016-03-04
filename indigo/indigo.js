#!/usr/bin/env node

var ncp = require('ncp').ncp;
var path = require('path');
var fs = require('fs');

require('yargs')
    .usage('$0 <cmd> [args]')
    .option('directory', {
        alias: 'd',
        describe: 'Provide the directory to install Indigo to'
    })
    .command('install', 'Install Violet', {}, function (argv) {
        var directory = 'indigo';
        if (argv.directory != null) {
            directory = argv.directory;
        }

        install(directory);
    })
    .command('update', 'Update Indigo', {}, function (argv) {
        var directory = 'indigo';
        if (argv.directory != null) {
            directory = argv.directory;
        }

        deleteFolderRecursive(directory);
        install(directory);
    })
    .help('help')
    .argv;

function install(directory) {
    ncp(path.resolve(__dirname, './source'), directory, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('Installed Indigo!');
    });
}

// thanks to http://www.geedew.com/remove-a-directory-that-is-not-empty-in-nodejs/
function deleteFolderRecursive(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};
