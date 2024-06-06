// Selecting the ".palm-view" element and all elements with class ".palm-section"
const palmView = document.querySelector(".slides");
const palmSections = document.querySelectorAll(".palm__section");

// Adding a wheel event listener to the window
window.addEventListener("wheel", (event) => {
    // Determining the direction of the scroll
    let direction = 1;
    
    if (event.deltaY < 1) {
        direction = -1
    }

    // Scrolling the ".palm-view" element horizontally
    palmView.scrollBy({
        left: ((palmView.scrollWidth / palmView.children.length)) * direction,
        behavior: "smooth",
    })
})

// IntersectionObserver tracking visibility changes of sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // When a section is in view
            console.log("in view")
            // Adjusting opacity of child elements
            entry.target.children[0].style.opacity = 0.75;

            // Changing background color
            if (entry.target.classList.contains("sky-blue")) {
                document.body.style.backgroundColor = "skyblue";
            }
            
            if (entry.target.classList.contains("sky-grey")) {
                document.body.style.backgroundColor = "dimgray";
            }
            
            if (entry.target.classList.contains("sky-orange")) {
                document.body.style.backgroundColor = "peru";
            }

            // Adjusting position of various elements
            if (entry.target.classList.contains("clouds")) {
                document.querySelector("#clouds").style.top = "-23vw";
            }

            else {
                document.querySelector("#clouds").style.top = "-92vw";
            }

            if (entry.target.classList.contains("trash")) {
                document.querySelector("#trash1").style.top = "40vw";
                document.querySelector("#trash2").style.top = "40vw";
            }

            else {
                document.querySelector("#trash1").style.top = "100vw";
                document.querySelector("#trash2").style.top = "100vw";
            }

            if (entry.target.classList.contains("bushes")) {
                document.querySelector("#bushes").style.top = "18vw";
            }

            else {
                document.querySelector("#bushes").style.top = "100vw";
            }

            if (entry.target.classList.contains("foreground")) {
                document.querySelector("#foreground").style.top = "-49vw";
            }

            else {
                document.querySelector("#foreground").style.top = "0vw";
            }

            if (entry.target.classList.contains("animals")) {
                document.querySelector("#snail").style.top = "49vw";
                document.querySelector("#turtle").style.top = "45vw";
            }

            else {
                document.querySelector("#snail").style.top = "100vw";
                document.querySelector("#turtle").style.top = "100vw";
            }

            // Adjusting opacity of logo
            if (entry.target.classList.contains("logo")) {
                document.querySelector("#logo").style.opacity = 1;
            }

            else {
                document.querySelector("#logo").style.opacity = 0;
            }
        }
        else {
            // When a section is not in view, reset opacity of child elements
            entry.target.children[0].style.opacity = 0;
        }
    });
});

// Observing visibility changes for each section
document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
})