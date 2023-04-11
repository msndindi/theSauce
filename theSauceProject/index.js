
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Scroll to top button event listener
const scrollToTopButton = document.getElementById('scrollToTopButton');

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// JavaScript to add click event listeners to the navigation links
var navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the target element's ID from the href attribute
    var targetId = link.getAttribute('href');

    // Use the target ID to scroll to the corresponding section on the page
    var targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});









     

// Online ordering form event listener
const onlineOrderingForm = document.getElementById('onlineOrderingForm');
const onlineOrderingSubmitButton = document.getElementById('onlineOrderingSubmitButton');

onlineOrderingSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  // Code to submit the form data to the server and handle the response goes here
});

// Reservation form event listener
const reservationForm = document.getElementById('reservationForm');
const reservationSubmitButton = document.getElementById('reservationSubmitButton');

reservationSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  // Code to submit the form data to the server and handle the response goes here
});

// Review form event listener
const reviewForm = document.getElementById('reviewForm');
const reviewSubmitButton = document.getElementById('reviewSubmitButton');

reviewSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  // Code to submit the form data to the server and handle the response goes here
});




//  ordering system
document.getElementById('add-to-cart').addEventListener('click', function(event) {
  event.preventDefault();

  // Get the selected menu item and its value
  var menuItem = document.getElementById('menu-item');
  var menuItemValue = menuItem.value;

  // Create a new cart item element with the selected menu item value
  var cartItem = document.createElement('li');
  cartItem.textContent = menuItem.options[menuItem.selectedIndex].text;
  document.getElementById('cart-items').appendChild(cartItem);

  // Update the cart total
  var cartTotal = document.getElementById('cart-total');
  var currentTotal = parseFloat(cartTotal.textContent.replace('ksh', ''));
  var menuItemPrice = getMenuItemPrice(menuItemValue);
  var newTotal = currentTotal + menuItemPrice;
  cartTotal.textContent = 'Total: ksh' + newTotal.toFixed(2);

  
  menuItem.value = '';
});

document.getElementById('checkout').addEventListener('click', function(event) {
  event.preventDefault();

  // Perform checkout logic here
  alert('Thank you for your order!');
});

// Helper function to get the price of a menu item based on its value
function getMenuItemPrice(menuItemValue) {
  // Replace with your logic to fetch menu item prices from a database or other source
  var menuItemPrices = {
    'cheese fries':200,
    'chicken':1000,
    'samosa': 80,
    'kebab' : 100,
    'shawarma' :200,
    
  
    
    
    

    // Add more menu items and prices as needed
  };
  return menuItemPrices[menuItemValue] || 0;
}


const form = document.querySelector('form');
const firstName = form.querySelector('input[name="first-name"]');
const lastName = form.querySelector('input[name="last-name"]');
const email = form.querySelector('input[name="email"]');
const reservationDate = form.querySelector('input[name="reservation-date"]');
const reservationTime = form.querySelector('input[name="reservation-time"]');
const numGuests = form.querySelector('input[name="num-guests"]');
const errorContainer = document.querySelector('#error-container');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (validateForm()) {
    // Form is valid, submit it
    alert('Reservation submitted!');
    form.reset();
    errorContainer.style.display = 'none';
  } else {
    // Form is invalid, display error message
    errorContainer.style.display = 'block';
  }
});

function validateForm() 
  let valid = true;
  errorContainer.innerHTML = '';

  if (firstName.value.trim() === '') {
    valid = false;
    displayError('First name is required');
  }

  if (lastName.value.trim() === '') {
    valid = false;
    displayError('Last name is required');
  }

  if (email.value.trim() === '') {
    valid = false;
    displayError('Email is required');
  } else if (!isValidEmail(email.value)) {
    valid = false;
    displayError('Email is not valid');
  }

  if (reservationDate.value.trim() === '') {
    valid = false;
    displayError('Reservation date is required');
  }

  if (reservationTime.value.trim() === '') {
    valid = false;
    displayError('Reservation time is required');
  }

  if (numGuests.value.trim() === '' || numGuests.value < 1) {
    valid = false;
  }

  
  