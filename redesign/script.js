const contrast_button = document.getElementById("contrast-button");
const mode_button = document.getElementById("mode-button");
const text_button = document.getElementById("text-button");

const home = document.getElementById("home");

const header_top = document.getElementById("header-top");  
const nav = document.getElementsByName("nav"); // nav does not have id 
const footer = document.getElementsByName("footer");

// flags for state management
let CONTRAST_FLAG = 0;
let MODE_FLAG = 0;
let TEXT_FLAG = 0;


// buttons toggle between the two different options
contrast_button.addEventListener("click", () => {
    console.log("CONTRAST CLICKED");

    if (CONTRAST_FLAG) { // high contrast 
        home.classList.remove("contrast-high");
        home.classList.add("contrast-regular");
        CONTRAST_FLAG = 0;

        console.log("CHANGE TO REGULAR CONTRAST");

    } else { // regular
        home.classList.remove("contrast-regular");
        home.classList.add("contrast-high");
        CONTRAST_FLAG = 1;

        console.log("CHANGE TO HIGH CONTRAST")

    }
});

mode_button.addEventListener("click", () => {
    console.log("mode button clicked");
    console.log(home.classList);

    if (MODE_FLAG) { // dark mode
        home.classList.remove("mode-dark");
        home.classList.add("mode-light");
        MODE_FLAG = 0;

        console.log("CHANGE TO LIGHT MODE");

    } else { // light mode 
        home.classList.remove("mode-light");
        home.classList.add("mode-dark");
        MODE_FLAG = 1;

        console.log("CHANGE TO DARK MODE");
    }

    console.log(home.classList);

})


