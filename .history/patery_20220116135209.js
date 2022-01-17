document.querySelectorAll("*").forEach(function(e) {
    // class padding = "pad-" + number of px
    if(e.classList.contains("pad")){
        const padding = e.classList.replace("pad-", "") + "px";
        console.log(padding);
        e.style.padding = e.classList.replace("pad-", "") + "px";
    }
});