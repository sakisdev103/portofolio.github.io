//Modal

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});


//Carousel

const images= [
  {
    img: "../../images/image-product-1.jpg"
  },
  {
    img: "../../images/image-product-2.jpg"
  },
  {
    img: "../../images/image-product-3.jpg"
  },
  {
    img: "../../images/image-product-4.jpg"
  }
]

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const img = document.getElementById("modal-img");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = images[currentItem];
  img.src = item.img;
});

// show person based on item
function showPerson(person) {
  const item = images[person];
  img.src = item.img;

}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > images.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = images.length - 1;
  }
  showPerson(currentItem);
});



//Add to Cart


const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const displayQuantity = document.getElementById("display-quantity");
const addToCart = document.querySelector(".add-to-cart");

//Get Quantity

let currentQuantity = 0;

minusBtn.addEventListener("click" , function(){
  currentQuantity = currentQuantity -1;
  if(currentQuantity < 0){
    currentQuantity = 0;
  }
  displayQuantity.textContent = currentQuantity;
})

plusBtn.addEventListener("click" , function(){
  currentQuantity = currentQuantity +1;
  displayQuantity.textContent = currentQuantity;
})

//Final price

let finalPrice = 0;

addToCart.addEventListener("click", function(){
  finalPrice = finalPrice + (currentQuantity * 125);
  openCart.innerHTML =`<img src="../images/icon-cart.svg" alt=""> <p class="cart-quantity"> ${currentQuantity} </p>`;
})

//Open Cart Container

const openCart = document.querySelector(".cart-btn");
const cartContainer = document.querySelector(".open-cart");
const displayCart = document.querySelector(".display-cart-items");

openCart.addEventListener("click" , function(){
  cartContainer.classList.toggle("open-cart-true");
  if(finalPrice > 0){
    displayCart.innerHTML =  `<div class="display-cart-items2">
    <div class="cart-img">
      <img src="../images/image-product-1-thumbnail.jpg" alt="">
    </div>
    <div class="cart-content">
      <p>Fall Limited Edition Sneakers</p>
      <div class="cart-price-calc">
        <p>$125.00 x ${currentQuantity} <h5>${finalPrice}.00</h5></p>
      </div>
    </div>
    <div class="delete-item">
      <img src="../images/icon-delete.svg" alt="">
    </div>
  </div>
  <button class="checkout">Checkout</button>
</div>`;

    deleteCartItem();
  } else{
    displayCart.innerHTML = `<p class="empty-cart"> Your cart is empty.</p>`;
  }
    
  
  
})


//Delete Cart Item

function deleteCartItem(){

  const deleteItem = displayCart.querySelector(".delete-item");
  const deleteBtn = displayCart.querySelector(".checkout");

  deleteItem.addEventListener("click", function(e){    
    e.currentTarget.parentElement.remove();
    deleteBtn.remove();
    finalPrice = 0;
    displayCart.innerHTML = `<p class="empty-cart"> Your cart is empty.</p>`;
    openCart.innerHTML =`<img src="../images/icon-cart.svg" alt="">`
  })

}