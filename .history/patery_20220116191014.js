(async () => {
    // if 403, return
    if (document.body.innerHTML.includes('403 Forbidden')) return;
    // if 404, return
    if (document.title.includes('404')) return;
    // create a padding element tag
    document.querySelectorAll('padding').forEach(e => {
        new Promise(resolve => {
            e.remove();
            resolve();
        }).then(() => {
            // create a div having the same class as the padding element
            let div = document.createElement('div');
            div.className = e.className;
            document.body.appendChild(div);
    });
    document.querySelectorAll("*").forEach(function(e) {
        // custom attributes
        if (e.hasAttribute('padV')) {
            // remove this attribute
            new Promise(function(resolve, reject) {
                const padV = e.getAttribute('padV');
                resolve(padV);
                
            }).then(function(padV) {
                e.style.paddingTop = padV;
                e.style.paddingBottom = padV;
                e.removeAttribute('padV');
            });  
        }
        if (e.hasAttribute('padH')) {
            // remove this attribute
            new Promise(function(resolve, reject) {
                const padH = e.getAttribute('padH');
                resolve(padH);
                
            }).then(function(padH) {
                e.style.paddingLeft = padH;
                e.style.paddingRight = padH;
                e.removeAttribute('padH');
            });
            
            
        }

    });
})();