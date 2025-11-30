const mobileBtn = document.querySelector(".header__mobile");
const mobileNavigationBox = document.querySelector(".header__nav");

mobileBtn.addEventListener("click", function () {
  mobileNavigationBox.classList.toggle("open");
});

// Tabovi
const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".product");

// Funkcija koja aktivira tab i prikaže odgovarajuću sekciju
function activateTab(tab) {
  const targetId = tab.getAttribute("data-target");

  // Sakrij sve sekcije
  sections.forEach((section) => (section.style.display = "none"));

  // Prikaži samo odabranu sekciju
  document.getElementById(targetId).style.display = "grid";

  // Ukloni klasu active sa svih tabova
  tabs.forEach((t) => t.classList.remove("active"));

  // Dodaj klasu active kliknutom tabu
  tab.classList.add("active");
}

// Dodaj event listener na sve tabove
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateTab(tab);
  });
});

// Na početku: aktiviraj prvi tab
if (tabs.length > 0) {
  activateTab(tabs[0]);
}
