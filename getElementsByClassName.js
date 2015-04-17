// Let's implement it from scratch:
var getElementsByClassName = function(className, node){
  var result = [];
  
  node = node || document.body;

  var classes = node.className.split(' ');
  
  if (classes.indexOf(className) >= 0){
  	result.push(node);
  }
  
  for (var i = 0; i<node.children.length; i++) {
  	var childResult = getElementsByClassName(className, node.children[i]);
  	result = result.concat(childResult);
  }

  return result;
};
