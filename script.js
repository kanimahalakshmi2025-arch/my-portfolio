
// Automatically update the year
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});


// Close menu after clicking a link
const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});
