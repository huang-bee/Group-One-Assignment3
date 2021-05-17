//variables
const addItemInput = document.querySelector('input.question_text_box');
const addItemButton = document.querySelector('button.additem_button_button');

//adding items
addItemButton.addEventListener('click', () =>{
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent=addItemInput.value;
  ul.appendChild(li);
  addItemInput.value='';
});



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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
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
