function validate() {

  var x = document.getElementsByClassName('notonsale');

  x = Array.prototype.slice.call(x);

  if (document.getElementById('checkbox-1').checked) {

    x.forEach( function(element){
      element.style.display = 'none'; 
  });

  } else {
    x.forEach( function(element){
      element.style.display = 'flex'; 
  });
  }
}


function show_ingredients() {
  document.getElementById('ingredients').style.display = 'block';
  document.getElementById('nutritionalInformation').style.display = 'none';
  document.getElementById('allergens').style.display = 'none';

  document.getElementById('ingredients_button').classList.add("nav_button_active");
  document.getElementById('nutritionalInformation_button').classList.remove("nav_button_active");
  document.getElementById('allergens_button').classList.remove("nav_button_active");
}

function show_nutritionalInformation() {
  document.getElementById('ingredients').style.display = 'none';
  document.getElementById('nutritionalInformation').style.display = 'block';
  document.getElementById('allergens').style.display = 'none';

  document.getElementById('ingredients_button').classList.remove("nav_button_active");
  document.getElementById('nutritionalInformation_button').classList.add("nav_button_active");
  document.getElementById('allergens_button').classList.remove("nav_button_active");
}

function show_allergens() {
  document.getElementById('ingredients').style.display = 'none';
  document.getElementById('nutritionalInformation').style.display = 'none';
  document.getElementById('allergens').style.display = 'block';

  document.getElementById('ingredients_button').classList.remove("nav_button_active");
  document.getElementById('nutritionalInformation_button').classList.remove("nav_button_active");
  document.getElementById('allergens_button').classList.add("nav_button_active");
}

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
