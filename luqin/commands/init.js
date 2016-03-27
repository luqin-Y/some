'use strict';

const fs = require('fs');
const path = require('path');
const config = require('../config.js');

const stru = config.structure;
const rootName = './' + stru.name;
module.exports = function() {

  if (stru.name) {
    fs.mkdir(rootName, () => {
      stru.fileData.forEach(function(item) {
        if (item.type === 'dir') {
          // 创建目录
          fs.mkdir(rootName + '/' + item.name);
        } else if (item.type === 'file') {
          // 创建文件 writeFile content
          fs.writeFile(rootName + '/' + item.name, item.content, 'utf-8');
        }
      });
    });
  }
}
