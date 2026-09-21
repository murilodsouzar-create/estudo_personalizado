const darkMode = document.getElementById("darkMode");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const searchInput = document.getElementById("searchInput");


// DARK MODE

if (darkMode) {

    darkMode.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("darkMode", "true");
            darkMode.textContent = "☀️";
        } else {
            localStorage.setItem("darkMode", "false");
            darkMode.textContent = "🌙";
        }

    });

}


// CARREGAR DARK MODE

if (localStorage.getItem("darkMode") === "true") {

    document.body.classList.add("dark");

    if (darkMode) {
        darkMode.textContent = "☀️";
    }

}


// MENU MOBILE

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// PESQUISA

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const search = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const name = card.dataset.name.toLowerCase();

            if (name.includes(search)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}