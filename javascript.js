// When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
  const dropdown = document.getElementById("myDropdown");
  const dropdown_button = document.getElementById("myDropdown_button");
  var x = document.getElementById("dropdown_arrow");

  dropdown.classList.toggle("show");
  dropdown_button.classList.toggle("dropdown_button_active");

  if (x.innerHTML === "arrow_drop_down") {
    x.innerHTML = "arrow_drop_up";
  } else {
    x.innerHTML = "arrow_drop_down";
  }
}


// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function(event) {
  const dropdown_button = document.getElementById("myDropdown_button");
  const dropdown_arrow = document.getElementById("dropdown_arrow");

  var dropdown = document.getElementById("myDropdown");
  var i;

  if (!event.target.matches(".dropdown_button")) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
        dropdown_button.classList.remove("dropdown_button_active");
        dropdown_arrow.innerHTML = ("arrow_drop_down");
      }
  }
});


//prevents transition effects from playing while the window is being resized
var resizeTimer;
window.addEventListener("resize", function() {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

// Switches button text on the dropdown button based on selection
function replaceText(e) {
  const active_button = document.querySelector("#myDropdown button.active");
  const dropdown_text = document.querySelector("#dropdown_text");
  if (active_button !== null) {
    active_button.classList.remove("active");
  }
  e.target.className = "active";
  dropdown_text.innerHTML = "Sort by: " + e.target.innerHTML;
}

function validate() {

  var x = document.getElementsByClassName("notonsale");

  x = Array.prototype.slice.call(x);

  if (document.getElementById("checkbox-1").checked) {

    x.forEach( function(element){
      element.style.display = "none";
  });

  } else {
    x.forEach( function(element){
      element.style.display = "flex";
  });
  }
}

function show_ingredients() {
  document.getElementById("ingredients").style.display = "block";
  document.getElementById("nutritionalInformation").style.display = "none";
  document.getElementById("allergens").style.display = "none";

  document.getElementById("ingredients_button").classList.add("nav_button_active");
  document.getElementById("nutritionalInformation_button").classList.remove("nav_button_active");
  document.getElementById("allergens_button").classList.remove("nav_button_active");
}

function show_nutritionalInformation() {
  document.getElementById("ingredients").style.display = "none";
  document.getElementById("nutritionalInformation").style.display = 'block';
  document.getElementById("allergens").style.display = "none";

  document.getElementById("ingredients_button").classList.remove("nav_button_active");
  document.getElementById("nutritionalInformation_button").classList.add("nav_button_active");
  document.getElementById("allergens_button").classList.remove("nav_button_active");
}

function show_allergens() {
  document.getElementById("ingredients").style.display = "none";
  document.getElementById("nutritionalInformation").style.display = "none";
  document.getElementById("allergens").style.display = "block";

  document.getElementById("ingredients_button").classList.remove("nav_button_active");
  document.getElementById("nutritionalInformation_button").classList.remove("nav_button_active");
  document.getElementById("allergens_button").classList.add("nav_button_active");
}

var inputenter = document.getElementById("myInput");

inputenter.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
  addElement();
  }
});

var elements = [];
window.onload = function() {
  if (JSON.parse(localStorage.getItem("elements")) != null)
    elements = JSON.parse(localStorage.getItem("elements"));
  console.log(elements);
  display();
};
function addElement() {
  if (document.querySelector(".question_text_box").value.trim() != "") {
    elements.push(document.querySelector(".question_text_box").value.trim());
    if (localStorage.getItem("elements") == null) {
      localStorage.setItem("elements", JSON.stringify(elements));
    } else {
      localStorage.setItem("elements", JSON.stringify(elements));
    }
    display();
  }
}
function display() {
  document.querySelector(".list_item_wrapper").innerHTML = "";
  for (var i = 0; i < elements.length; i++)
    document.querySelector(".list_item_wrapper").innerHTML += "<li class='list_item'><button class='button remove_button' onclick='del("+ i +")'><span class='button_icon remove_button_icon material-icons-outlined'>delete</span><span class='button_text remove_button_text'>Remove item</span></button><span class='list_item_text button_text'>" + elements[i] + "<a href = 'browse.html' class='button browse_button'><span class='button_icon browse_button_icon material-icons-outlined'>search</span><span class='button_text browse_button_text'>Browse range</span></a></span></span></li>";
    console.log(document.querySelector(".question_text_box").value);
    // if (document.querySelector(".question_text_box").value == "chocolate") {
    //   document.querySelector(".list_item_wrapper").innerHTML += "<a href = 'browse.html' class='button browse_button'><span class='button_icon browse_button_icon material-icons-outlined'>search</span><span class='button_text browse_button_text'>Browse range</span></a>";
    // } else if (document.querySelector(".question_text_box").value == "bread") {
    //   document.querySelector(".list_item_wrapper").innerHTML += "<a href = 'bread.html' class='button browse_button'><span class='button_icon browse_button_icon material-icons-outlined'>search</span><span class='button_text browse_button_text'>Browse range</span></a>";
    // }
    document.querySelector(".question_text_box").value = "";
  }
function del(index) {
  elements.splice(index, 1);
  if (localStorage.getItem("elements") == null) {
    localStorage.setItem("elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("elements", JSON.stringify(elements));
  }
  display();
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function show_deliveryorpickup() {
  document.getElementById("login_wrapper").style.display = "none";
  document.getElementById("deliveryorpickup_wrapper").style.display = "flex";
}

function show_deliverydetails() {
  document.getElementById("deliveryorpickup_wrapper").style.display = "none";
  document.getElementById("deliverydetails_wrapper").style.display = "flex";
}

function show_purchasedetails() {
  document.getElementById("deliverydetails_wrapper").style.display = "none";
  document.getElementById("purchasedetails_wrapper").style.display = "flex";
}


function changehref(e) {

  if (document.getElementById('cvv').value !== "") {

const place_order_button = document.getElementById('place_order_button');
const place_order_button_icon = document.getElementById('place_order_button_icon');
const place_order_button_text = document.getElementById('place_order_button_text');

    place_order_button.style.backgroundColor = "#3B67BB";
    place_order_button_icon.style.color = "#fff";
    place_order_button_text.style.color = "#fff";
    place_order_button.setAttribute( "onClick", "javascript: show_confirmorder();" );




  } else {
    place_order_button.style.backgroundColor = "rgba(0, 0, 0, 0.025)";
    place_order_button_icon.style.color = "#5f6368";
    place_order_button_text.style.color = "#5f6368";
    place_order_button.onclick( "onClick", "javascript: " );
  }
}

function show_confirmorder() {

  const place_order_button = document.getElementById('place_order_button');
  const place_order_button_text = document.getElementById('place_order_button_text');

  document.getElementById('confirm_order').style.display = "inline-flex";
  place_order_button.style.display = "none"

  document.getElementById("purchase_details_wrapper").style.display = "none";
  document.getElementById("checkout_wrapper").style.gridTemplateColumns = "1fr";
  
  place_order_button_text.innerHTML = "Confirm order";
}



function show_createaccount() {
  document.getElementById("login_wrapper").style.display = "none";
  document.getElementById("createaccount_wrapper").style.display = "flex";
}

function show_existingaccount() {
  document.getElementById("login_wrapper").style.display = "none";
  document.getElementById("existingaccount_wrapper").style.display = "flex";
}

