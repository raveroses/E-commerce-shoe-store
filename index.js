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
let count = 0;

plus.addEventListener("click", () => {
  count++;
  counting.textContent = count;
});

minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counting.textContent = count;
  }
});
