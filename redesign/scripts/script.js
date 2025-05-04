import { Store } from "./store.js";

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
const about = document.getElementById("about");

let PAGE = null;

// initialize storage
const STORAGE = Store.store();
if (STORAGE.get("contrast") === null) {
    STORAGE.set("contrast", "contrast-regular");
}

if (STORAGE.get("mode") === null) {
    STORAGE.set("mode", "mode-light");
}

if (STORAGE.get("text") === null) {
    STORAGE.set("text", "text-regular");
} 



const assignPage = () => {
    if (home !== null) {
        PAGE = home;
    } else if (news !== null) {
        PAGE = news;
    } else if (jobs !== null) {
        PAGE = jobs
    } else if (parks !== null) {
        PAGE = parks;
    } else if (transportation !== null) {
        PAGE = transportation;
    } else {
        PAGE = about;
    }
}
// initialize page load 

window.addEventListener("load", () => {
    assignPage();
    PAGE.classList.add(STORAGE.get("contrast")); // should not be null at this point
    PAGE.classList.add(STORAGE.get("mode")); 
    PAGE.classList.add(STORAGE.get("text"));
})


// buttons toggle between the two different options
contrast_button.addEventListener("click", () => {
    assignPage();
    const values = STORAGE.toggle("contrast");

    PAGE.classList.remove(values[0]);
    PAGE.classList.add(values[1]);
});

mode_button.addEventListener("click", () => {
    assignPage();
    const values = STORAGE.toggle("mode");
    PAGE.classList.remove(values[0]);
    PAGE.classList.add(values[1]);
})

text_button.addEventListener("click", () => {
    assignPage();
    const values = STORAGE.toggle("text");
    PAGE.classList.remove(values[0]);
    PAGE.classList.add(values[1]);
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

