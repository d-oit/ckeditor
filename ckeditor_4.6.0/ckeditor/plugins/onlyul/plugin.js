/**
 * Copyright (c) 2016, Dominik M. M. Oswald. All rights reserved.
*/

CKEDITOR.plugins.add('onlyul',{
  beforeInit:function(editor){
    addEventOn(editor);
  }
})

function addEventOn(editor) {
  editor.on('paste', function (evt){
    var data = evt.data.dataValue;
    var cleanhtml = ReplaceList(data);  
    evt.data.dataValue = cleanhtml;
  });
}

function ReplaceList(html) {
   var replacehtml = html.replace(/<ol[^>]*>/ig,"<ul>");
   replacehtml = replacehtml.replace(/<\/?ol>/g,"</ul>");
   return replacehtml;
}