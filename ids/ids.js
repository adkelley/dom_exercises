window.addEventListener("load", function(event) {
  var main = document.querySelector("#main-heading");
  main.innerHTML = "Fun Dom Example"; // Property

  var diagram = document.querySelector("#diagram");
  diagram.style.height = "300px";

  diagram.setAttribute("src", "img/dom_basic.png"); // Attribute
  setTimeout(function() {
    diagram.setAttribute("src", "img/dom_model.svg");
  }, 5000);
});

/*
Learning: Attributes are defined by HTML. Properties are defined by DOM.
Attributes carry additional information about an HTML element and come 
in name=”value” pairs. Attributes are in your HTML text document/file, whereas 
properties are in HTML DOM tree. This means that attributes do not change and 
always carry initial (default) values. However, HTML properties can change, for
example when user checks a checkbox, inputs text to textarea or uses JavaScript
to change the property value.

style - property, src - attribute
*/
