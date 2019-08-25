// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className) {
  var elementsClasses = [];

  var elements = function(element) {
    if (element.classList && element.classList.contains(className)) {
      elementsClasses.push(element);
    }
    if (element.childNodes) {
      element.childNodes.forEach(function(item) {
        elements(item);
      });
    }
  }
  elements(document.body);

  return elementsClasses;
}