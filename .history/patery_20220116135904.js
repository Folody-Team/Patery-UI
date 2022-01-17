document.querySelectorAll("*").forEach(function(e) {
    // class padding = "pad-" + number of px to pad
    const pad = e.classList.value.match(/pad-\d+/);
    if (e.classList.forEach(el => el.includes("pad-"))) {
        e.style.padding = e.classList.forEach(el => el.includes("pad-"))
    }
});