
// Get the modal
var modal = document.getElementById("myModal");
const modal2 = document.getElementById('shoe-modal');

// Get the buttons that open the modal
var modalBtn = document.querySelectorAll('.add-to-cart')
const shoesModal = document.querySelectorAll('.shoes-add-to-cart');

// Get the span element that closes the modal
var span = document.querySelectorAll(".close");

// When the user clicks on the button, open the modal
modalBtn.forEach((item) => {
  item.onclick = () => {
    modal.style.display = "block";
  }
});

shoesModal.forEach((item) => {
  item.onclick = () => {
    modal2.style.display = "block";
  }
});

// When the user clicks on <span> (x), close the modal
span.forEach((btn) => {
  btn.onclick = () => {
    modal.style.display = "none";
    modal2.style.display = "none";

  }
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


//Search feature
$(document).ready(function(){
  $("#search-input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#shop .card-deck .card").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      $(this).addClass('container')
    
    });
  });
});

//Add and remove item from cart
const shop = document.getElementById('shop');
// const itemTitle = document.querySelector('.card-title');
const itemsCart = document.getElementById('cart');


const addItemToCart =()=>{
  //create element
  const li = document.createElement('li');
  const deleteIcon = document.createElement('span');
  const itemDesc = document.createElement('span');
  const itemQty = document.createElement('span')
  const itemPrice = document.createElement('span');

  //add content to the elements

  // itemDesc.textContent = itemTitle.textContent;
  itemDesc.textContent = "item1"
  itemPrice.textContent = "ugx: 15000";
  deleteIcon.innerHTML = `<svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      class="bi bi-dash-circle"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
        fill-rule="evenodd"
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      <path
        fill-rule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
    />
    </svg>`
  ;

  

  //add classes
  li.classList.add('cart-items');

  //add items to DOM (li)
  li.appendChild(deleteIcon);
  li.appendChild(itemDesc);
  li.appendChild(itemPrice);

  itemsCart.appendChild(li);

}

// const logIn = ()=>{
//   location.assign("../UI/shop.html");
// }
const form = document.getElementById('sign-up-form')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  location.assign("../UI/shop.html");
});