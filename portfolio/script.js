const carousel_cds = document.getElementById("carousel-cds");
const overlay_cds = document.getElementById("overlay-cds");

const IMAGE_SOURCES_CDS = [
    "../images/graphics/cds-graphic-hfa.png",
    "../images/graphics/cds-graphic-comp-bio.png",
    "../images/graphics/cds-graphic-award.png"
]

const NUM_IMAGES_CDS = IMAGE_SOURCES_CDS.length;
let COUNTER_CDS = 0; // count the first image


const carousel_jabberwocky = document.getElementById("carousel-jabberwocky");
const overlay_jabberwocky = document.getElementById("overlay-jabberwocky");

const IMAGE_SOURCES_JABBERWOCKY = [
    "../images/graphics/jabberwocky-graphic-poster.png",
    "../images/graphics/jabberwocky-graphic-instagram.png",
    "../images/graphics/jabberwocky-graphic-submit.png",
    "../images/graphics/jabberwocky-graphic-reminder.png"
]

const NUM_IMAGES_JABBERWOCKY = IMAGE_SOURCES_JABBERWOCKY.length;
let COUNTER_JABBERWOCKY = 0; // count the first image

carousel_cds.addEventListener("mousemove", (event) => {
    const x = event.clientX - carousel_cds.getBoundingClientRect().x;

    const width = carousel_cds.offsetWidth;
    const quarter = width / 4;
    const left = quarter;
    const right = width - quarter;

    if ((x <= left) || (x >= right)) {
        if (x <= left) {
            overlay_cds.classList.remove("right");
            overlay_cds.classList.add("left");
            overlay_cds.innerText = "Previous graphic"
        } else {
            overlay_cds.classList.remove("left");
            overlay_cds.classList.add("right");
            overlay_cds.innerText = "Next graphic"
        }
        overlay_cds.classList.add("hover");
    } else {
        overlay_cds.classList.remove("hover");
    }

});

carousel_cds.addEventListener("mouseleave", () => {
    overlay_cds.classList.remove("hover")
})

carousel_cds.addEventListener("click", (event) => {
    const x = event.clientX;
    const width = carousel_cds.offsetWidth;
    const quarter = width / 4;
    const left = quarter;
    const right = width - quarter;

    if (x <= left) {
        console.log("click left");
        carousel_cds.removeChild(document.getElementsByClassName("carousel-item")[0]); // remove current image
        
        COUNTER_CDS = COUNTER_CDS - 1;
        if (COUNTER_CDS < 0) {
            COUNTER_CDS = NUM_IMAGES_CDS - 1; // reset to end
        }
        
        const nextImage = document.createElement("img");
        nextImage.setAttribute("src", IMAGE_SOURCES_CDS[COUNTER_CDS]);
        nextImage.classList.add("carousel-item");
        carousel_cds.appendChild(nextImage)
    } 
    
    if (x >= right) {
        console.log("click right");
        carousel_cds.removeChild(document.getElementsByClassName("carousel-item")[0]); // remove current image

        COUNTER_CDS = COUNTER_CDS + 1;
        if (COUNTER_CDS == NUM_IMAGES_CDS) {
            COUNTER_CDS = 0; // reset to beginning
        }

        const nextImage = document.createElement("img");
        nextImage.setAttribute("src", IMAGE_SOURCES_CDS[COUNTER_CDS]);
        nextImage.classList.add("carousel-item");
        carousel_cds.appendChild(nextImage)
    }
})






carousel_jabberwocky.addEventListener("mousemove", (event) => {
    const x = event.clientX - carousel_jabberwocky.getBoundingClientRect().x;

    const width = carousel_jabberwocky.offsetWidth;
    const quarter = width / 4;
    const left = quarter;
    const right = width - quarter;

    if ((x <= left) || (x >= right)) {
        if (x <= left) {
            overlay_jabberwocky.classList.remove("right");
            overlay_jabberwocky.classList.add("left");
            overlay_jabberwocky.innerText = "Previous graphic"
        } else {
            overlay_jabberwocky.classList.remove("left");
            overlay_jabberwocky.classList.add("right");
            overlay_jabberwocky.innerText = "Next graphic"
        }
        overlay_jabberwocky.classList.add("hover");
    } else {
        overlay_jabberwocky.classList.remove("hover");
    }

});

carousel_jabberwocky.addEventListener("mouseleave", () => {
    overlay_jabberwocky.classList.remove("hover")
})

carousel_jabberwocky.addEventListener("click", (event) => {
    const x = event.clientX;
    const width = carousel_jabberwocky.offsetWidth;
    const quarter = width / 4;
    const left = quarter;
    const right = width - quarter;

    if (x <= left) {
        console.log("click left");
        carousel_jabberwocky.removeChild(document.getElementsByClassName("carousel-item")[1]); // remove current image
        
        COUNTER_JABBERWOCKY = COUNTER_JABBERWOCKY - 1;
        if (COUNTER_JABBERWOCKY < 0) {
            COUNTER_JABBERWOCKY = NUM_IMAGES_JABBERWOCKY - 1; // reset to end
        }
        
        const nextImage = document.createElement("img");
        nextImage.setAttribute("src", IMAGE_SOURCES_JABBERWOCKY[COUNTER_JABBERWOCKY]);
        nextImage.classList.add("carousel-item");
        carousel_jabberwocky.appendChild(nextImage)
    } 
    
    if (x >= right) {
        console.log("click right...");
        carousel_jabberwocky.removeChild(document.getElementsByClassName("carousel-item")[1]); // remove current image

        COUNTER_JABBERWOCKY = COUNTER_JABBERWOCKY + 1;
        if (COUNTER_JABBERWOCKY == NUM_IMAGES_JABBERWOCKY) {
            COUNTER_JABBERWOCKY = 0; // reset to beginning
        }

        const nextImage = document.createElement("img");
        nextImage.setAttribute("src", IMAGE_SOURCES_JABBERWOCKY[COUNTER_JABBERWOCKY]);
        nextImage.classList.add("carousel-item");
        carousel_jabberwocky.appendChild(nextImage)
    }
})