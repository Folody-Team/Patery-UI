document.querySelectorAll("*").forEach(function(e) {
    // class padding = "pad-" + number of px to pad
    if (e.classList.contains("pad-1")) {
        e.style.padding = "1px";
    }
});