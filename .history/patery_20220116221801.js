(async () => {})();(async () => {})();(async () => {})();(async () => {})();(async () => {})();
const P = document.querySelector('PateryPadding');
const D = document.createElement('div');
const A = P.attributes;
for (let i = 0; i < A.length; i++) {
    D.setAttribute(A[i].name, A[i].value);
} while (P.firstChild) {
    D.appendChild(P.firstChild);
} P.parentNode.replaceChild(D, P);
(async () => {
    // if 403, return
    if (document.body.innerHTML.includes('403 Forbidden')) return;
    // if 404, return
    if (document.title.includes('404')) return;
    // create a padding element tag
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