(async () => {
    // if 403, return
    if (document.body.innerHTML.includes('403 Forbidden')) return;
    // if 404, return
    if (document.title.includes('404')) return;
    document.querySelectorAll("*").forEach(function(e) {
        // custom attributes
        if (e.hasAttribute('padH')) {
            // remove this attribute
            new Promise(function(resolve, reject) {
                const padV = e.getAttribute('padv');
                resolve(padV);
                
            }).then(function(padV) {
                e.style.paddingTop = padV;
                e.style.paddingBottom = padV;
                e.removeAttribute('padv');
            });  
        }
        if (e.hasAttribute('padH')) {
            // remove this attribute
            new Promise(function(resolve, reject) {
                const padH = e.getAttribute('padh');
                resolve(padH);
                
            }).then(function(padH) {
                e.style.paddingLeft = padH;
                e.style.paddingRight = padH;
                e.removeAttribute('padh');
            });
            
            
        }

    });
})();