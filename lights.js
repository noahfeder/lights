"use strict";


var buildImg = function(tag,text,className,where) {
  var $tag = $('<' + tag + '>');
  $tag.addClass(className);
  $tag.attr({
    'src': './img/'+text+'.png',
    'id': text
  });
  $tag.appendTo(where);
}

var constructImg = function() {
  var imgs = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','dark'];
  imgs.forEach(function(el){
    var className = (el === 'dark') ? 'layer base' : 'layer hidden'
    buildImg('img',el,className,'.lights')
  })
}



$(function(){

  constructImg();

}); // end of $ ready
