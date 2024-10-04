const navbar = document.querySelectorAll(".navbar ul li a");

navbar.forEach((anchor) => {
  anchor.addEventListener("mouseover", () => {
    anchor.style.color = "hsl(220, 13%, 13%)";
    anchor.style.borderBottom = "4px solid hsl(26, 100%, 55%)";
    anchor.style.paddingBottom = "41px";
    anchor.style.treansition = "borderBottom 2s ease";
  });

  anchor.addEventListener("mouseout", () => {
    anchor.style.color = "";
    anchor.style.borderBottom = "";
    anchor.style.paddingBottom = "";
  });
});

const minus = document.querySelector(".minus img");
const plus = document.querySelector(".plus img");
const counting = document.querySelector(".counting");
const countshowing = document.querySelector(".countshowing");

let count = 0;

plus.addEventListener("click", () => {
  count++;
  counting.textContent = count;
  countshowing.textContent = count;
  if (countshowing.classList.contains("hidden")) {
    countshowing.classList.remove("hidden");
  }
});

minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counting.textContent = count;
    countshowing.textContent = count;
  }
  if (countshowing.classList.contains("hidden")) {
    countshowing.classList.remove("hidden");
  }
});

const imageMother = document.querySelector(".image-mother img");
const image = document.querySelectorAll(".image img");
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

const imageContainer = document.querySelector(".image-container");
image.forEach((image) => {
  image.addEventListener("click", (e) => {
    const dataset = parseInt(e.target.dataset.id);
    ArrayImage(arrayImage, dataset);

    if (dataset) {
      image.style.border = "2px solid hsl(26, 100%, 55%)";
      image.style.opacity = "0.5";
    } else {
      image.style.border = "";
      image.style.opacity = "";
    }
  });
});

function ArrayImage(smallImage, idset) {
  smallImage.forEach((ele) => {
    if (ele.id === idset) {
      return (imageMother.src = ele.image);
    }
  });
}
// ArrayImage(arrayImage);

// const secondFlex = document.querySelector("secondFlex");

// secondFlex.addEventListener("click", function () {});
