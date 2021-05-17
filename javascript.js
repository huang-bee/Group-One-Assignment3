let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("myDropdown_button").classList.toggle("dropdown_button_active");

  var x = document.getElementById("dropdown_arrow");
  if (x.innerHTML === "arrow_drop_down") {
    x.innerHTML = "arrow_drop_up";
  } else {
    x.innerHTML = "arrow_drop_down";
  }

}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown_button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.getElementById("myDropdown_button").classList.remove("dropdown_button_active");
        document.getElementById("dropdown_arrow").innerHTML = ('arrow_drop_down');
      }
    }
  }
}


//variables
const addItemInput = document.querySelector('input.question_text_box');
const addItemButton = document.querySelector('button.additem_button_button');
const listUl = document.querySelector('ul')

//remove items
listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
      if(event.target.className == "remove") {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
      }
    }
 });


//adding remove button
function removeButton (li) {
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove Item';
  li.appendChild(remove);
}

//adding items
addItemButton.addEventListener('click', () =>{
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  let line = document.createElement('hr');
  li.textContent=addItemInput.value;
  let words = addItemInput.value.length;
  ul.appendChild(li);
  if (words > 0) {
    removeButton(li);
    li.appendChild(line);
    }
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

