/*
Learnings:
 When can we use .innerHTML and when can we use .value? - properties vs. values
 What do you use when determining if a checkbox is checked? - id.checked
*/

window.addEventListener("load", function(event) {
    // retrieve content between <label></label>
    var food = document.querySelector("#foodLabel");
    var label = food.innerHTML;
    
    // retrieve input
    var foodId = document.querySelector("#foodId");
    var input = foodId.value;

    // checkbox checked?
    var calmId = document.querySelector("#calmId");
    var isChecked = calmId.checked;

});
