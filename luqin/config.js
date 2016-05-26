
'use strict';
const fs=require('fs');
const path= require('path');

exports.structure={
  name:'namePackage',
  fileData:[
    {
      name:'css',
      type:'dir'
    },
    {
      name:'js',
      type:'dir'
    },
    {
      name:'img',
      type:'dir'
    },
    {
      name:'index.html',
      type:'file',
      content:fs.readFileSync(path.join(__dirname,'index.html'), 'utf-8'),
    },
    {
      name:'404.html',
      type:'file',
      content:fs.readFileSync(path.join(__dirname,'404.html'), 'utf-8'),
    },
  ]
}
