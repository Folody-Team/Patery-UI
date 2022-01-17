document.querySelectorAll("*").forEach(function(e) {
    // class padding = "pad-" + number of px to pad
    if (e.classList.forEach(el => el.includes("pad-"))) {
        e.style.padding = e.classList.forEach(el => el.includes("pad-"))
    }
});