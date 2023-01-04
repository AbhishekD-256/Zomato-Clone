const openBtn = document.querySelector(".menu-open");
const closeBtn = document.querySelector(".menu-close");
const radioBtn = document.querySelector(".radio-buttons");
openBtn.addEventListener("click", function () {
  document.querySelector(".mobile-nav").style.display = "block";
});
closeBtn.addEventListener("click", function () {
  document.querySelector(".mobile-nav").style.display = "none";
});

radioBtn.addEventListener("click", function (e) {
  if (!e.target.closest("input")) return;
  const id = e.target.closest("input").id;

  if (id === "phone") {
    document.querySelector(".phone").classList.remove("hidden");
    document.querySelector(".mail").classList.add("hidden");
  }
  if (id === "email") {
    document.querySelector(".phone").classList.add("hidden");
    document.querySelector(".mail").classList.remove("hidden");
  }
});
