
'use strict';

const fs = require('fs');
const path = require('path');
const config = require('../config.js');

const stru = config.structure;
const rootName= './'+stru.name;
// C:\Users\Administrator
module.exports=function(){
  // if (stru.name) {
  //   fs.mkdir(rootName, function () {
  //     // 遍历 fileData ，如果是目录，创建目录，如果是文件，创建文件
  //     stru.fileData.forEach(function (item) {
  //       if (item.type === 'dir') {
  //         fs.mkdir(rootName + '/' + item.name);
  //       } else if (item.type === 'file') {
  //         fs.writeFile(rootName + '/' + item.name, item.content);
  //       }
  //     });
  //   });
  //   console.log(2222);
  // }

  if(stru.name){
    fs.mkdir(rootName, () => {
      stru.fileData.forEach(function (item){
        if(item.type === 'dir'){
          // 创建目录
          fs.mkdir(rootName + '/' + item.name);
        }else if(item.type === 'file'){
          // 创建文件 writeFile content
          fs.writeFile(rootName + '/' + item.name, item.content, 'utf-8');
        }
      });
    });
  }
}
