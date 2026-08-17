$(document).ready(function () {
  // Galerie
  $(".gallery").mauGallery({
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3
    },
    lightBox: true,
    lightboxId: "myAwesomeLightbox",
    showTags: true,
    tagsPosition: "top"
  });


  // Menu burger
  const burgerMenu = document.getElementById("burger-menu");
  const mainNav = document.getElementById("main-nav");

  // Vérifier que les éléments existent
  if (burgerMenu && mainNav) {

    burgerMenu.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("active");

      burgerMenu.classList.toggle("active");

      burgerMenu.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );
    });


    // Fermer le menu lorsqu'on clique sur un lien
    document.querySelectorAll("#main-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("active");
        burgerMenu.classList.remove("active");

        burgerMenu.setAttribute("aria-expanded", "false");
      });
    });
  }
});
