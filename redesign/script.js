import { Store } from "store.js";

const contrast_button = document.getElementById("contrast-button");
const mode_button = document.getElementById("mode-button");
const text_button = document.getElementById("text-button");

const email_input = document.getElementById("email-input");
const email_button = document.getElementById("email-button");

const home = document.getElementById("home"); // entire home body
const news = document.getElementById("news"); 
const jobs = document.getElementById("jobs");
const parks = document.getElementById("parks");
const transportation = document.getElementById("transportation");

const header_top = document.getElementById("header-top");  
const nav = document.getElementsByName("nav"); // nav does not have id 
const footer = document.getElementsByName("footer");

// flags for state management
let CONTRAST_FLAG = 0;
let MODE_FLAG = 0;
let TEXT_FLAG = 0;

let PAGE = null;

const assignPage = () => {
    if (home !== null) {
        PAGE = home;
    } else if (news !== null) {
        PAGE = news;
    } else if (jobs !== null) {
        PAGE = jobs
    } else if (parks !== null) {
        PAGE = parks;
    } else {
        PAGE = transportation;
    }
}


// buttons toggle between the two different options
contrast_button.addEventListener("click", () => {
    assignPage();
    if (CONTRAST_FLAG) { // high contrast 
        PAGE.classList.remove("contrast-high");
        PAGE.classList.add("contrast-regular");
        CONTRAST_FLAG = 0;

        alert("Contrast set to: REGULAR");

        console.log("CHANGE TO REGULAR CONTRAST");

    } else { // regular
        PAGE.classList.remove("contrast-regular");
        PAGE.classList.add("contrast-high");
        CONTRAST_FLAG = 1;

        alert("Contrast set to: HIGH");

        console.log("CHANGE TO HIGH CONTRAST");
    }
});

mode_button.addEventListener("click", () => {
    assignPage();
    if (MODE_FLAG) { // dark mode
        PAGE.classList.remove("mode-dark");
        PAGE.classList.add("mode-light");
        MODE_FLAG = 0;

        alert("Mode set to: LIGHT");

        console.log("CHANGE TO LIGHT MODE");

    } else { // light mode 
        PAGE.classList.remove("mode-light");
        PAGE.classList.add("mode-dark");
        MODE_FLAG = 1;

        alert("Mode set to: DARK");

        console.log("CHANGE TO DARK MODE");
    }
})

text_button.addEventListener("click", () => {
    assignPage();
    if (TEXT_FLAG) {
        PAGE.classList.remove("text-large");
        PAGE.classList.add("text-regular");
        TEXT_FLAG = 0;

        alert("Text size set to: REGULAR")

        console.log("CHANGE TO REGULAR TEXT")
    } else { // set to larger text
        PAGE.classList.remove("text-regular");
        PAGE.classList.add("text-large")
        TEXT_FLAG = 1;
        
        alert("Text size set to: LARGE");

        console.log("CHANGE TO LARGE TEXT")
    }
})


// alert on email
const emailAlert = () => {
    const enteredEmail = email_input.value;
    if (enteredEmail.includes("@") && enteredEmail.includes(".")) {
        alert(`Successfully signed up for email with ${enteredEmail}.`);
    } else {
        alert("Please enter a valid email address.")
    }

    console.log("Signed up for email");
}

email_button.addEventListener("click", emailAlert);

email_input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        emailAlert();
    }
})

