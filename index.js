"use strict";

const navbar = document.querySelectorAll(".navbar ul li a");
const minus = document.querySelector(".minus img");
const plus = document.querySelector(".plus img");
const counting = document.querySelector(".counting");
const countshowing = document.querySelector(".countshowing");
const imageMother = document.querySelector(".image-mother img");
const image = document.querySelectorAll(".image img");
const cartImage = document.querySelector(".cart-image img");
const cartcontentprice = document.querySelector(".cart-content-flex p");
const cartcontentmultiply = document.querySelector(".twosure");
const cartcontentotal = document.querySelector(".cart-content-flex h5");
const price = document.querySelector(".price");
const secondFlex = document.querySelector(".secondFlex");
const arrayImage = [
  {
    image: "images/image-product-1.jpg",
    id: 1,
  },
  {
    image: "images/image-product-2.jpg",
    id: 2,
  },
  {
    image: "images/image-product-3.jpg",
    id: 3,
  },
  {
    image: "images/image-product-4.jpg",
    id: 4,
  },
];
const meassage = document.querySelector(".message");
const imageContainer = document.querySelector(".image-container");
const cartcontents = document.querySelector(".cart-contents");
const cartcontent = document.querySelector(".cart-content");
const deletes = document.querySelector(".delete");
const motherhidden = document.querySelector(".mother-hidden");
const imagemothers = document.querySelector(".image-mothers img");
const images = document.querySelectorAll(".images img");
const nextcaret = document.querySelector(".next-caret");
const previouscaret = document.querySelector(".previous-caret");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const checkout = document.querySelector(".checkout");
const cart = document.querySelector(".cart");
const closebutton = document.querySelector(".close-button");
let count = 0;
navbar.forEach((anchor) => {
  anchor.addEventListener("mouseover", () => {
    anchor.style.color = "hsl(220, 13%, 13%)";
    anchor.style.borderBottom = "4px solid hsl(26, 100%, 55%)";
    anchor.style.paddingBottom = "41px";
    anchor.style.transition = "borderBottom 2s ease";
  });

  anchor.addEventListener("mouseout", () => {
    anchor.style.color = "";
    anchor.style.borderBottom = "";
    anchor.style.paddingBottom = "";
  });
});

function Plus() {
  count++;
  if (counting) counting.textContent = count;
  if (countshowing) countshowing.textContent = count;

  if (countshowing.classList.contains("hidden")) {
    countshowing.classList.remove("hidden");
  }
  meassage.classList.add("hidden");
  motherhidden.classList.remove("hidden");
}
plus.addEventListener("click", Plus);

function Minus() {
  if (count > 0) {
    count--;
    counting.textContent = count;

    countshowing.textContent = count;

    if (count === 0) {
      motherhidden.classList.add("hidden");
      meassage.classList.remove("hidden");
    }
  }
  if (countshowing.classList.contains("hidden")) {
    countshowing.classList.remove("hidden");
  }
}
minus.addEventListener("click", Minus);

image.forEach((image) => {
  image.addEventListener("click", (e) => {
    const dataset = parseInt(e.target.dataset.id);
    ArrayImage(arrayImage, dataset);
  });
});

function ArrayImage(smallImage, idset) {
  smallImage.forEach((ele) => {
    if (ele.id === idset) {
      imageMother.src = ele.image;
      cartImage.src = ele.image;
    }
  });
}

function PriceControl() {
  cartcontentprice.textContent = `$${parseInt(price.textContent).toFixed(2)}`;
  cartcontentmultiply.textContent = ` X${count}`;
  cartcontentotal.textContent = `$${(
    parseInt(price.textContent).toFixed(2) * count
  ).toFixed(2)}`;

  countshowing.textContent = count;
  //   return (cartcontents.innerHTML = `
  //             <p>Fall Limited Edition Sneakers</p>
  //             <div class="cart-content-flex">
  //               <p>$${parseInt(price.textContent).toFixed(
  //                 2
  //               )} * <span class="twosure">${count}</span></p>
  //               <h5>$${(parseInt(price.textContent).toFixed(2) * count).toFixed(
  //                 2
  //               )}</h5>
  //               </div>`);
}

secondFlex.addEventListener("click", PriceControl);

function Delete() {
  motherhidden.classList.add("hidden");
  if (cartcontentprice) cartcontentprice.textContent = "";
  if (cartcontentotal) cartcontentotal.textContent = "";
  if (cartcontentmultiply) cartcontentmultiply.textContent = "";
  count = 0;
  counting.textContent = 0;
  Plus();
  Minus();
  PriceControl();
}
deletes.addEventListener("click", Delete);

// arrayImage
let extract = 0;

// FIRST IMAGE
console.log(imagemothers);

function NextCaret() {
  extract++;

  if (extract >= arrayImage.length) {
    extract = 0;
  }
  let idController = arrayImage[extract]["id"];
  SmallImages(idController, extract);

  //   let accessArray = arrayImage[extract];
  //   imagemothers.src = accessArray.image;
}

function PreviousCaret() {
  extract--;

  if (extract < 0) {
    extract = arrayImage.length - 1;
  }
  let idController = arrayImage[extract]["id"];
  console.log(idController);
  SmallImages(idController, extract);
}

function SmallImages(id, extract) {
  images.forEach((image) => {
    const dataset = parseInt(image.dataset.id);
    console.log(dataset);
    console.log(image);
    if (dataset === id) {
      imagemothers.src = arrayImage[extract].image;
      image.style.border = "2px solid hsl(26, 100%, 55%)";
      image.style.opacity = "0.5";
    } else {
      image.style.border = "none";
      image.style.opacity = "1";
    }
  });
}
nextcaret.addEventListener("click", NextCaret);
previouscaret.addEventListener("click", PreviousCaret);

function Checkout() {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
  cart.classList.add("hidden");
}
function CloseButton() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
checkout.addEventListener("click", Checkout);
closebutton.addEventListener("click", CloseButton);
const carticon = document.querySelector(".cart-icon");
function Cart() {
  cart.classList.toggle("hidden");
}

carticon.addEventListener("click", Cart);
