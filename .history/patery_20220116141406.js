(async () => {
    // if 403, return
    if (document.body.innerHTML.includes('403 Forbidden')) return;
    // if 404, return
    if (document.title.includes('404')) return;
    document.querySelectorAll("*").forEach(function(e) {
        const padVer = e.classList.value.match(/padV-\d+/);
        const padHor = e.classList.value.match(/padH-\d+/);
        const padHorizon = (padH) => {
            e.style.paddingLeft = padNum + "px"; e.style.paddingRight = padNum + "px";
        }, padVertical = (padV) => {
            e.style.paddingTop = padNum + "px"; e.style.paddingBottom = padNum + "px";
        };
        if (padVer) {
            const padNum = padVer[0].split("-")[1];
            padVertical(padNum);
        } else if (padHor) {
            const padNum = padHor[0].split("-")[1];
            padHorizon(padNum);
        } else if (padVer && padHor) {
            const padNum = padVer[0].split("-")[1];
            padVertical(padNum);
            padHorizon(padNum);
        }
    });
})();