document.querySelectorAll("*").forEach(function(e) {
    // class padding = "pad-" + number of px to pad
    if (e.classList.forEach(el => el.includes("pad-"))) {
        confirm("Found a pad class");
        e.style.padding = e.classList[0].replace("pad-", "") + "px";
    }
});