const PateryPadding = document.querySelector('PateryPadding');
const div = document.createElement('div');
// get all attributes from the PateryPadding element
const attributes = PateryPadding.attributes;
// set all attributes to the div element
for (let i = 0; i < attributes.length; i++) {
    div.setAttribute(attributes[i].name, attributes[i].value);
}
// move all children from the PateryPadding element to the div element
while (PateryPadding.firstChild) {
    div.appendChild(PateryPadding.firstChild);
}
// replace the PateryPadding element with the div element
PateryPadding.parentNode.replaceChild(div, PateryPadding);
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
