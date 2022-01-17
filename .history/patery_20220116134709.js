document.querySelectorAll("*").forEach(function(e) {
    if(e.className.includes("pad-")){
        const paddingClass = e.className.split(" ")[1];
        const padding = parseInt(paddingClass.replace("pad-", ""));
        e.style.padding = `${padding}px`;
    }
});