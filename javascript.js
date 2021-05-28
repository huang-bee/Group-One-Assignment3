var cart = [];
var elements = [];
var product_name = 'test';

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
  const dropdown = document.getElementById("myDropdown");
  const dropdown_button = document.getElementById("myDropdown_button");
  var x = document.getElementById("dropdown_arrow");

  //test

  dropdown.classList.toggle("show");
  dropdown_button.classList.toggle("dropdown_button_active");

  if (x.innerHTML === "arrow_drop_down") {
    x.innerHTML = "arrow_drop_up";
  } else {
    x.innerHTML = "arrow_drop_down";
  }
}

// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function (event) {
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
window.addEventListener("resize", function () {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
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

// filters by items that are on sale
function validate() {
  var x = document.getElementsByClassName("notonsale");
  x = Array.prototype.slice.call(x);
  if (document.getElementById("checkbox-1").checked) {
    x.forEach(function (element) {
      element.style.display = "none";
    });

  } else {
    x.forEach(function (element) {
      element.style.display = "flex";
    });
  }
}

//switches content on the product details page
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


// allows the user to press enter instead of clicking the add item button
var inputenter = document.getElementById("myInput");
inputenter.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addElement();
  }
});

window.onload = function () {

  if (JSON.parse(localStorage.getItem("elements")) != null) 
    elements = JSON.parse(localStorage.getItem("elements"));

    if (JSON.parse(localStorage.getItem("cart")) != null) 
    cart = JSON.parse(localStorage.getItem("cart"));


    if (cart.length == 0) {
      document.getElementById('cart_wrapper').style.display = 'none';
      document.getElementById('list_wrapper').style.gridTemplateColumns = '1fr';
      document.getElementById('list_item_wrapper').style.marginLeft = 'auto';
      document.getElementById('list_item_wrapper').style.marginRight = 'auto';
      document.getElementById('list_item_wrapper').style.maxWidth = '800px';
      

      
    } else {
      document.getElementById('cart_wrapper').style.display = 'flex';
      document.getElementById('list_wrapper').style.gridTemplateColumns = 'auto 540px';
      document.getElementById('list_item_wrapper').style.marginLeft = '0';
      document.getElementById('list_item_wrapper').style.marginRight = '0';
      document.getElementById('list_item_wrapper').style.maxWidth = '100%';

    }

    document.getElementById('items_in_cart').innerHTML = cart.length + ' items in cart'
    document.getElementById('items_in_list').innerHTML = elements.length + ' items in list'

  console.log(elements);
  console.log(cart);
  display();
  displayCart();
  document.getElementById('product_name').innerHTML = product_name;
};

function updateCart() {
  cart = JSON.parse(localStorage.getItem("cart"));

  cart.push(document.getElementById('product_name').innerHTML);

  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = 'index.html';

}

function addCart() {
  window.location.href = 'index.html';
  cart.push('product name');
  if (localStorage.getItem("cart") == null) {
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  displayCart();
}

function displayCart() {
  document.querySelector(".cart_item_wrapper").innerHTML = "";
  document.querySelector(".cart_list").innerHTML = "";

  for (var i = 0; i < cart.length; i++) {
  document.querySelector(".cart_item_wrapper").innerHTML += "<li class='cart_list_item'><button class='button remove_button' onclick='delCart(" + i + ")'><span class='button_icon remove_button_icon material-icons-outlined'>delete</span><span class='button_text remove_button_text'>Remove item</span></button><div class='cart_middle_wrapper'><span class='cart_item_text'>" + cart[i] + "</span><span class='button_text'>Quantity</span><span class='button_text'>180g</div><div class='cart_end_wrapper'><span class='button_text'>$3.59 ea</span><span class='cart_item_text'>$3.59</span><span class='button_text'>$1.99 per 100g</span></div></li>";
  document.querySelector(".cart_list").innerHTML += "<li class='cart_item'><span class='button_text'>" + cart[i] + "</span><span class='button_text cost'>$3.59</span></li>";
  }
}

//remove the list item from the local storage
function delCart(index) {
  cart.splice(index, 1);

  if (localStorage.getItem("cart") == null) {
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  cart = JSON.parse(localStorage.getItem("cart"));
  if (cart.length == 0) {
    document.getElementById('cart_wrapper').style.display = 'none';
    document.getElementById('list_wrapper').style.gridTemplateColumns = '1fr';
    document.getElementById('list_item_wrapper').style.marginLeft = 'auto';
    document.getElementById('list_item_wrapper').style.marginRight = 'auto';
    document.getElementById('list_item_wrapper').style.maxWidth = '800px';

    
  } else {
    document.getElementById('cart_wrapper').style.display = 'flex';
    document.getElementById('list_wrapper').style.gridTemplateColumns = 'auto 540px';
    document.getElementById('list_item_wrapper').style.marginLeft = '0';
    document.getElementById('list_item_wrapper').style.marginRight = '0';
    document.getElementById('list_item_wrapper').style.maxWidth = '100%';

  }

  document.getElementById('items_in_cart').innerHTML = cart.length + ' items in cart';

  displayCart();
}


// stores the list text in local storage
function addElement() {
  if (document.querySelector(".question_text_box").value.trim() != "") {
    elements.push(document.querySelector(".question_text_box").value.trim());


    if (localStorage.getItem("elements") == null) {
      localStorage.setItem("elements", JSON.stringify(elements));
    } else {
      localStorage.setItem("elements", JSON.stringify(elements));
    }

    document.getElementById('items_in_list').innerHTML = elements.length + ' items in list';

    display();
  }
}

// adds a list item with the text that the user entered
function display() {
  document.querySelector(".list_item_wrapper").innerHTML = "";

  for (var i = 0; i < elements.length; i++) 
    document.querySelector(".list_item_wrapper").innerHTML += "<li class='list_item'><button class='button remove_button' onclick='del(" + i + ")'><span class='button_icon remove_button_icon material-icons-outlined'>delete</span><span class='button_text remove_button_text'>Remove item</span></button><span class='list_item_text button_text'>" + elements[i] + `<button onclick = 'redirect(event)' class='button browse_button'><span class='button_icon browse_button_icon material-icons-outlined'>search</span><span class='button_text browse_button_text'>Browse range</span></button></span></span></li>`;
  
  console.log(document.querySelector(".question_text_box").value);
  document.querySelector(".question_text_box").value = "";
}

//remove the list item from the local storage
function del(index) {
  elements.splice(index, 1);
  if (localStorage.getItem("elements") == null) {
    localStorage.setItem("elements", JSON.stringify(elements));
  } else {
    localStorage.setItem("elements", JSON.stringify(elements));
  }
  document.getElementById('items_in_list').innerHTML = elements.length + ' items in list';

  display();
}


// if the user has added either bread or chocolate link them to the correct page, if not, link them to the no results page
function redirect(event) {
  var x = event.target.previousSibling.textContent.toLowerCase();
  if (x == 'chocolate') {
    window.location.href = 'Browse.html';
  } else if (x == 'bread') {
    window.location.href = 'bread.html';
  } else if (x == 'milk'){
    window.location.href = 'milk.html';
  } else if (x == 'crackers' || x== 'cracker'){
    window.location.href = 'crackers.html';
  } else {
    window.location.href = 'noResults.html';
  }
}

function show_loginprompt() {
  const place_order_button = document.getElementById('place_order_button');
  const place_order_button_text = document.getElementById('place_order_button_text');
  document.getElementById("login_wrapper").style.display = "flex";
  document.getElementById("deliveryorpickup_wrapper").style.display = "none";
  document.getElementById("deliverydetails_wrapper").style.display = "none";
  document.getElementById("purchasedetails_wrapper").style.display = "none";
  document.getElementById("inner_nav_loginprompt").style.display = "flex";
  document.getElementById("inner_nav_deliveryorpickup").style.display = "none";
  document.getElementById("inner_nav_deliverydetails").style.display = "none";
  document.getElementById("inner_nav_purchasedetails").style.display = "none";
  document.getElementById("inner_nav_confirmorder").style.display = "none";
  document.getElementById('confirm_order').style.display = "none";
  place_order_button.style.display = "flex"
  document.getElementById("purchase_details_wrapper").style.display = "flex";
  document.getElementById("checkout_wrapper").style.gridTemplateColumns = "auto 540px";

  place_order_button_text.innerHTML = "Place order";
}


function show_deliveryorpickup() {
  const place_order_button = document.getElementById('place_order_button');
  const place_order_button_text = document.getElementById('place_order_button_text');
  document.getElementById("login_wrapper").style.display = "none";
  document.getElementById("deliveryorpickup_wrapper").style.display = "flex";
  document.getElementById("deliverydetails_wrapper").style.display = "none";
  document.getElementById("purchasedetails_wrapper").style.display = "none";
  document.getElementById("inner_nav_loginprompt").style.display = "none";
  document.getElementById("inner_nav_deliveryorpickup").style.display = "flex";
  document.getElementById("inner_nav_deliverydetails").style.display = "none";
  document.getElementById("inner_nav_purchasedetails").style.display = "none";
  document.getElementById("inner_nav_confirmorder").style.display = "none";
  document.getElementById('confirm_order').style.display = "none";
  place_order_button.style.display = "flex"
  document.getElementById("purchase_details_wrapper").style.display = "flex";
  document.getElementById("checkout_wrapper").style.gridTemplateColumns = "auto 540px";

  place_order_button_text.innerHTML = "Place order";
}

function show_deliverydetails() {
  const place_order_button = document.getElementById('place_order_button');
  const place_order_button_text = document.getElementById('place_order_button_text');
  document.getElementById("login_wrapper").style.display = "none";
  document.getElementById("deliveryorpickup_wrapper").style.display = "none";
  document.getElementById("deliverydetails_wrapper").style.display = "flex";
  document.getElementById("purchasedetails_wrapper").style.display = "none";
  document.getElementById("inner_nav_loginprompt").style.display = "none";
  document.getElementById("inner_nav_deliveryorpickup").style.display = "none";
  document.getElementById("inner_nav_deliverydetails").style.display = "flex";
  document.getElementById("inner_nav_purchasedetails").style.display = "none";
  document.getElementById("inner_nav_confirmorder").style.display = "none";
  document.getElementById('confirm_order').style.display = "none";
  place_order_button.style.display = "flex"
  document.getElementById("purchase_details_wrapper").style.display = "flex";
  document.getElementById("checkout_wrapper").style.gridTemplateColumns = "auto 540px";

  place_order_button_text.innerHTML = "Place order";
}

function show_purchasedetails() {
  const place_order_button = document.getElementById('place_order_button');
  const place_order_button_text = document.getElementById('place_order_button_text');
  document.getElementById("login_wrapper").style.display = "none";
  document.getElementById("deliveryorpickup_wrapper").style.display = "none";
  document.getElementById("deliverydetails_wrapper").style.display = "none";
  document.getElementById("purchasedetails_wrapper").style.display = "flex";
  document.getElementById("confirm_order").style.display = "flex";
  document.getElementById("inner_nav_loginprompt").style.display = "none";
  document.getElementById("inner_nav_deliveryorpickup").style.display = "none";
  document.getElementById("inner_nav_deliverydetails").style.display = "none";
  document.getElementById("inner_nav_purchasedetails").style.display = "flex";
  document.getElementById("inner_nav_confirmorder").style.display = "none";
  document.getElementById('confirm_order').style.display = "none";
  place_order_button.style.display = "flex"

  document.getElementById("purchase_details_wrapper").style.display = "flex";
  document.getElementById("checkout_wrapper").style.gridTemplateColumns = "auto 540px";

  place_order_button_text.innerHTML = "Place order";
}

function changehref(e) {

  if (document.getElementById('cvv').value !== "") {

    const place_order_button = document.getElementById('place_order_button');
    const place_order_button_icon = document.getElementById('place_order_button_icon');
    const place_order_button_text = document.getElementById('place_order_button_text');

    place_order_button.style.backgroundColor = "#3B67BB";
    place_order_button_icon.style.color = "#fff";
    place_order_button_text.style.color = "#fff";
    place_order_button.setAttribute("onClick", "javascript: show_confirmorder();");

  } else {
    place_order_button.style.backgroundColor = "rgba(0, 0, 0, 0.025)";
    place_order_button_icon.style.color = "#5f6368";
    place_order_button_text.style.color = "#5f6368";
    place_order_button.onclick("onClick", "javascript: ");
  }
}

function show_confirmorder() {

  document.getElementById("login_wrapper").style.display = "none";
  document.getElementById("deliveryorpickup_wrapper").style.display = "none";
  document.getElementById("deliverydetails_wrapper").style.display = "none";
  document.getElementById("purchasedetails_wrapper").style.display = "none";
  document.getElementById("inner_nav_loginprompt").style.display = "none";
  document.getElementById("inner_nav_deliveryorpickup").style.display = "none";
  document.getElementById("inner_nav_deliverydetails").style.display = "none";
  document.getElementById("inner_nav_purchasedetails").style.display = "none";
  document.getElementById("inner_nav_confirmorder").style.display = "flex";

  const place_order_button = document.getElementById('place_order_button');
  const place_order_button_text = document.getElementById('place_order_button_text');

  document.getElementById('confirm_order').style.display = "inline-flex";
  place_order_button.style.display = "none"

  document.getElementById("purchase_details_wrapper").style.display = "none";
  document.getElementById("checkout_wrapper").style.gridTemplateColumns = "1fr";

  place_order_button_text.innerHTML = "Confirm order";
}


function show_cards_wrapper() {

  document.getElementById("cards_wrapper").style.display = "flex";
  document.getElementById("createaccount_wrapper").style.display = "none";
  document.getElementById("existingaccount_wrapper").style.display = "none";
  document.getElementById("password_wrapper").style.display = "none";
  document.getElementById("inner_nav_loginSignup").style.display = "flex";
  document.getElementById("inner_nav_createAccount").style.display = "none";
  document.getElementById("inner_nav_email").style.display = "none";
  document.getElementById("inner_nav_password").style.display = "none";
}

function show_createaccount() {
  document.getElementById("cards_wrapper").style.display = "none";
  document.getElementById("createaccount_wrapper").style.display = "flex";
  document.getElementById("inner_nav_loginSignup").style.display = "none";
  document.getElementById("inner_nav_createAccount").style.display = "flex";
}

function show_existingaccount() {
  document.getElementById("cards_wrapper").style.display = "none";
  document.getElementById("existingaccount_wrapper").style.display = "flex";
  document.getElementById("inner_nav_loginSignup").style.display = "none";
  document.getElementById("inner_nav_email").style.display = "flex";
  document.getElementById("inner_nav_password").style.display = "none";
}

function show_password() {
  document.getElementById("existingaccount_wrapper").style.display = "none";
  document.getElementById("password_wrapper").style.display = "flex";
  document.getElementById("inner_nav_email").style.display = "none";
  document.getElementById("inner_nav_password").style.display = "flex";
}


function details(event) {
  var x = event.target.firstChild.innerHTML;
  var url = getComputedStyle(event.target).getPropertyValue('background-image');
  document.getElementById('product_name').innerHTML = x;
  document.getElementById('product_name_nav').innerHTML = x;

  document.getElementById('product_details_image').style.backgroundImage = url;

  document.querySelector("html").style.overflow = 'hidden';
  document.getElementById("modal01").style.display = "block";
}

function closeModal() {
    document.querySelector("html").style.overflow = 'overlay';
    document.getElementById("modal01").style.display = "none";
}

