(async () => {
    document.querySelectorAll("*").forEach(function(e) {
        // class padding = "pad-" + number of px to pad
        const padVer = e.classList.value.match(/padVer-\d+/);
        if (padVer) {
            const padNum = padVer[0].split("-")[1];
            e.style.paddingTop = padNum + "px";
            e.style.paddingBottom = padNum + "px";
        }
    });
})();