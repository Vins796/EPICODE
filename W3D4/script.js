// Puntatori
const body = document.body;
const cambioTitolo = document.getElementById("title");
const cambioColoreBody = document.querySelector(".nightModeButton");
const address = document.querySelector(".address");
const links = document.querySelectorAll(".product");
const changeClassImg = document.getElementsByTagName("img");
const changeColorPrices = document.querySelectorAll(".prices");

let isNightMode = false;

// Funzioni

// Cambio titolo
cambioTitolo.addEventListener("click", function () {
  cambioTitolo.textContent = "Benvenuti sul mio e-commerce!";
  cambioTitolo.style.color = "white";
  cambioTitolo.style.textTransform = "uppercase";
});

// cambio testo footer
address.addEventListener("click", function () {
  address.textContent = "Via dalle Palle 2";
});

// cambio colore body con night mode
cambioColoreBody.addEventListener("click", function () {
  body.classList.toggle("night-mode");
});


// cambio classe css ai link della tabella
for (let i = 0; i < links.length; i++) {
  if (!isNightMode) {
    links[i].addEventListener("mouseover", function () {
      links[i].style.color = "red";
    });
    links[i].addEventListener("mouseout", function () {
      links[i].style.color = "white";
    });
  }

if (isNightMode) {
  links[i].addEventListener("mouseover", function () {
    links[i].style.color = "red";
  });
  links[i].addEventListener("mouseout", function () {
    links[i].style.color = "black";
  });
}
}

// aggiungo e tolgo una classe alle immagini
for (let i = 0; i < changeClassImg.length; i++) {
  changeClassImg[i].addEventListener("mouseover", function () {
    changeClassImg[i].classList.toggle("dn");
  });

  changeClassImg[i].addEventListener("mouseout", function () {
    changeClassImg[i].classList.toggle("dn");
  });
}
