(async () => {
    // if 403, return
    if (document.body.innerHTML.includes('403 Forbidden')) return;
    // if 404, return
    if (document.title.includes('404')) return;
    document.querySelectorAll("*").forEach(function(e) {
        const padVer = e.classList.value.match(/padV-\d+/);
        if (padVer) {
            const padNum = padVer[0].split("-")[1];
            e.style.paddingTop = padNum + "px"; e.style.paddingBottom = padNum + "px";
        }
    });
})();