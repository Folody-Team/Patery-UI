(async () => {
    // if 403, return
    if (document.body.innerHTML.includes('403 Forbidden')) return;
    // if 404, return
    if (document.title.includes('404')) return;
    document.querySelectorAll("*").forEach(function(e) {
        // custom attributes
        if (e.hasAttribute('padV')) {
            e.style.paddingTop = e.getAttribute('padV');
            e.style.paddingBottom = e.getAttribute('padV');
        }

    });
})();