document.querySelectorAll("*").forEach(function(e) {
    // class padding = "pad-" + number of px
    if(e.classList.contains("pad-")){
        e.style.padding = e.classList.replace("pad-", "") + "px";
    }
});