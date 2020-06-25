var btnContainer = document.getElementById("nav");

var navitems = btnContainer.getElementsByClassName("navitem");


for (var i = 0; i < navitems.length; i++) {
  navitems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}