(async () => {
    // if 403, return
    if (document.body.innerHTML.includes('403 Forbidden')) return;
    // if 404, return
    if (document.title.includes('404')) return;
    document.querySelectorAll("*").forEach(function(e) {
        const padVer = e.classList.value.match(/padV-\d+/);
        const padHor = e.classList.value.match(/padH-\d+/);
        if (padVer) {
            const padNum = padVer[0].split("-")[1];
            e.style.paddingTop = padNum + "px"; e.style.paddingBottom = padNum + "px";
        } else if (padHor) {
            const padNum = padHor[0].split("-")[1];
            e.style.paddingLeft = padNum + "px"; e.style.paddingRight = padNum + "px";
        } else if (e.classList.value.includes("padV")) {
            e.style.paddingTop = e.classList.value.split("-")[1] + "px";
            e.style.paddingBottom = e.classList.value.split("-")[1] + "px";
        } else if (e.classList.value.includes("padH")) {
            e.style.paddingLeft = e.classList.value.split("-")[1] + "px";
            e.style.paddingRight = e.classList.value.split("-")[1] + "px";
        }
    });
})();