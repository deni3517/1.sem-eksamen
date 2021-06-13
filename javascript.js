window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#menu").classList.toggle("hidden");

  let erSkjult = document.querySelector("#menu").classList.contains("hidden");

  if (erSkjult == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "X";
  }
}

var quadimages = document.querySelectorAll("#animation_galleri figure");
for (i = 0; i < quadimages.length; i++) {
  quadimages[i].addEventListener("click", function () {
    this.classList.toggle("expanded");
  });
}

var quadimages = document.querySelectorAll("#redesign_galleri figure");
for (i = 0; i < quadimages.length; i++) {
  quadimages[i].addEventListener("click", function () {
    this.classList.toggle("expanded");
  });
}

var quadimages = document.querySelectorAll("#prototype_galleri figure");
for (i = 0; i < quadimages.length; i++) {
  quadimages[i].addEventListener("click", function () {
    this.classList.toggle("expanded");
  });
}

var quadimages = document.querySelectorAll("#html_galleri figure");
for (i = 0; i < quadimages.length; i++) {
  quadimages[i].addEventListener("click", function () {
    this.classList.toggle("expanded");
  });
}
