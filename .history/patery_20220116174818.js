(async () => {
    // if 403, return
    if (document.body.innerHTML.includes('403 Forbidden')) return;
    // if 404, return
    if (document.title.includes('404')) return;
    document.querySelectorAll("*").forEach(function(e) {
        // custom attributes
        if (e.hasAttribute('padv')) {
            // remove this attribute
            new Promise(function(resolve, reject) {
                const padV = e.getAttribute('padv');
                e.style.paddingTop = padV;
                e.style.paddingBottom = padV;
            }).then(function() {
                e.removeAttribute('padv');
            });
            
            
        }
        if (e.hasAttribute('padh')) {
            // remove this attribute
            new Promise(function(resolve, reject) {
                const padH = e.getAttribute('padh');
                e.style.paddingLeft = padH;
                e.style.paddingRight = padH;
            }).then(function() {
                // remove this attribute after padding is set
                e.removeAttribute('padh');
            });
        }

    });
})();