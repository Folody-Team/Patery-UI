(async () => {})();(async () => {})();(async () => {})();(async () => {})();(async () => {})();const P = document.querySelector('PateryPadding');const D = document.createElement('div');const A = P.attributes;for (let i = 0; i < A.length; i++) {D.setAttribute(A[i].name, A[i].value);} while (P.firstChild) {D.appendChild(P.firstChild);} P.parentNode.replaceChild(D, P);(async () => {if (document.body.innerHTML.includes('403 Forbidden')) return;if (document.title.includes('404')) return;document.querySelectorAll("*").forEach(function(e) {if (e.hasAttribute('padV')) {new Promise(function(resolve, reject) {const padV = e.getAttribute('padV');resolve(padV);   }).then(function(padV) {e.style.paddingTop = padV;e.style.paddingBottom = padV;e.removeAttribute('padV');});  }if (e.hasAttribute('padH')) {new Promise(function(resolve, reject) {const padH = e.getAttribute('padH');resolve(padH);    }).then(function(padH) {e.style.paddingLeft = padH;e.style.paddingRight = padH;e.removeAttribute('padH');});}});})();