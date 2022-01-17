(async () => {
    // if 403, return
    if (document.body.innerHTML.includes('403 Forbidden')) return;
    // if 404, return
    if (document.title.includes('404')) return;
    document.querySelectorAll("*").forEach(function(e) {
        const padVer = e.classList.value.match(/padV-\d+/);
        const padHor = e.classList.value.match(/padH-\d+/);
        e.style.paddingLeft = padHor + "px"; e.style.paddingRight = padHor + "px";
        e.style.paddingTop = padVer + "px"; e.style.paddingBottom = padVer + "px";
    });
})();