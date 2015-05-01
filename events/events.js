// Your code here
window.addEventListener("load", function(event) {
  document.getElementById("clicker").
    addEventListener("click", function(event) {
      alert("You clicked the button");
  });

  var mouser = document.getElementById("mouser");
  mouser.addEventListener("mouseover", function(event) {
    mouser.style.backgroundColor = "yellow";
  });
  mouser.addEventListener("mouseout", function(event) {
    mouser.style.backgroundColor = "green";
  });

  var former = document.getElementById("former");
  former.addEventListener("submit", function(event) {
    document.getElementByType
    alert("The text entered is: " + event.value);
  });

});
