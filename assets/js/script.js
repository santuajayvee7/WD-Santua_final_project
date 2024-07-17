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


/* ========================= for dark and light theme ===================== */

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",() => {
    if(document.body.classList.contains("dark"))
        {
            dayNight.querySelector("i").classList.add("fa-sun");
        }
        else 
        {
            dayNight.querySelector("i").classList.add("fa-moon");
        }
})



/*======= Typing Animation =============*/
var typed = new Typed(".text", {
    strings: [ "Cybersecurity Student","Gamer", "Dancer","Adventurer"],
    typeSpeed: 120,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});
