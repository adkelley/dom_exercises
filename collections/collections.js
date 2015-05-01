window.addEventListener("load", function(event) {
//
// Part 1
//
// get all the list elements
// refactored to functional programming style
    [].map.call(document.getElementsByTagName("li"), function(obj) {
      return obj.style.borderBottom = "dashed #000000";
    });

/*
 var datatype = document.querySelectorAll(".datatype");
 for (var i=0; i<list.length; i++) {
 list[i].style.borderBottom = "dashed #000000";
 }
*/


//
// Part 2
//
// get the class data and change color to red
// refactored to functional programming style
  [].map.call(document.getElementsByClassName("datatype"), function(obj) {
    return obj.style.color =  "red";
  });

/*
  var datatype = document.querySelectorAll(".datatype");
  for (var i=0; i<datatype.length; i++) {
    datatype[i].style.color = "red";
  }
*/


//
// Part 3
//
// get the class data and change color to red
// refactored to functional programming
  [].map.call(document.getElementsByClassName("function"), function(obj) {
    return obj.style.color =  "blue";
  });
/*
  var fn = document.querySelectorAll(".function");
  for (var i=0; i<fn.length; i++) {
    fn[i].style.color = "blue";
  }
*/

});

/*
Learnings:
Q: What are the differences between .getElementById, .getElementsByClassName, 
.getElementsByTagName, and querySelectorAll?
A: id vs. class vs. tagName vs. explicit string

How did you loop over the lists of elements?
*/
