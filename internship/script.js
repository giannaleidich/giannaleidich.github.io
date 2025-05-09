// simple script for theme change
const change_theme_button = document.getElementById("change-theme-button");
const banner = document.getElementById("banner");
let FLAG = 0;

change_theme_button.addEventListener("click", () => {
    console.log("changing theme...");
    if (FLAG == 0) {
        banner.classList.remove("umass");
        banner.classList.add("genai");
        FLAG = 1;
    } else {
        banner.classList.remove("genai");
        banner.classList.add("umass");
        FLAG = 0;
    }
})