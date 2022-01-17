document.querySelectorAll("*").forEach(function(e) {
    if(e.className.includes("pad-")){
        const paddingClass = e.className.split(" ")[1];
        const padding = paddingClass.split("pad-")[1];
        e.style.padding = `${padding}px`;
    }
});