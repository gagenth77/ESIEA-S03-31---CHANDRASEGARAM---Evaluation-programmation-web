window.addEventListener("load", function () {
  let compteur = 0;
  var periode = null;

  const pix = document
    .querySelector(".carousel")
    .querySelectorAll(".slider-image");
  const ordre = document
    .querySelector(".slider-page")
    .querySelectorAll(".page");
  const suiv = document
    .querySelector(".carousel")
    .querySelector("i.icon-arrow-next");
  const prec = document
    .querySelector(".carousel")
    .querySelector("i.icon-arrow-back");

  periode_controle(true, suivant, 5000);

  function periode_controle(flag, animate, time) {
    if (flag) periode = setInterval(animate, time);
    else clearInterval(periode);
  }

  function precedent() {
    pix[compteur].classList.remove("active");
    ordre[compteur].classList.remove("active");
    compteur <= 0 ? (compteur = pix.length - 1) : compteur--;
    pix[compteur].classList.add("active");
    ordre[compteur].classList.add("active");
  }

  function suivant() {
    pix[compteur].classList.remove("active");
    ordre[compteur].classList.remove("active");
    compteur >= pix.length - 1 ? (compteur = 0) : compteur++;
    pix[compteur].classList.add("active");
    ordre[compteur].classList.add("active");
  }

  suiv.addEventListener("click", function () {
    periode_controle(false);
    suivant();
    periode_controle(true, suivant, 5000);
  });

  prec.addEventListener("click", function () {
    periode_controle(false);
    precedent();
    periode_controle(true, suivant, 5000);
  });
});
