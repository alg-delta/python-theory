let buttons = document.querySelectorAll(".tab-btn");
let tabs = document.querySelectorAll(".tab-content");

buttons.forEach(function (button) {
  button.onclick = function () {
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });

    button.classList.add("active");

    let id = button.dataset.tab;

    document.getElementById(id).classList.add("active");
  };
});

const btn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
