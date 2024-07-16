const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default behavior of the link
    document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

const alternateStyles = document.querySelectorAll(".alternative-style");
function setActiveStyle(color) {
    alternateStyles.forEach(style => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}