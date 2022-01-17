(async () => {
    // if 403, return
    if (document.body.innerHTML.includes('403 Forbidden')) return;
    // if 404, return
    if (document.title.includes('404')) return;
    document.querySelectorAll("*").forEach(function(e) {
        // custom attributes
        if (e.hasAttribute('padV')) {
            // remove this attribute
            new Promise(function(resolve, reject) {
                const padV = e.getAttribute('padV');
                e.style.paddingTop = e.getAttribute('padV');
                e.style.paddingBottom = e.getAttribute('padV');
            }).then(function() {
                e.removeAttribute('padV');
            });
            
            
        }
        if (e.hasAttribute('padH')) {
            // remove this attribute
            e.removeAttribute('padH');
            e.style.paddingLeft = e.getAttribute('padH');
            e.style.paddingRight = e.getAttribute('padH');
        }

    });
})();