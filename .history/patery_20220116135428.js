document.querySelectorAll("*").forEach(function(e) {
    // class padding = "pad-" + number of px to pad
    if (e.classList.contains("pad")) {
        // remove "pad-"
        var pad = e.classList[-1].replace("pad-", "");
        // add padding to element
        e.style.padding = pad + "px";
    }
});