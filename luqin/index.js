'use strict';

const argv = process.argv.slice(2);
const command = argv[0];

const init = require('./commands/init');
switch(command){
  case "init":
    init();
    break;
  case "-v":
    console.log('-v');
    break;
  case "-h":
    console.log('-h');
    break;
  default:
    console.log('命令错误');
    break;
}

