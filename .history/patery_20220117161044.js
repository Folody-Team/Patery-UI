/**
 * Patery UI Library v0.1.0
 * Copyright (c) 2022, Patery
 * Released under the MIT license
 */
/**
 * @param {string} str
 * @return {string}
 * @description
 */
(async () => {
  const debug = false; // true;
})();
(async () => {
  const debug = false; // true;
})();
(async () => {
  const debug = false; // true;
})();
(async () => {
  const debug = false; // true;
})();
(async () => {
  const debug = false; // true;
})();
eval(eval(eval(eval(eval(eval(
  (function(){
    (() => {
      eval(eval(eval(eval(eval(
        /**
         * @param {string} str
         * @return {string}
         * @description
         * @param {string} str
         * @return {string}
         */
        main()
      )))));function main() {
        (async () => {
          // if document PateryPadding element tag
          if(document.querySelector("PateryPadding")) {
            const P = document.querySelector("PateryPadding");
            const D = document.createElement("div");
            const A = P.attributes;
            for (let i = 0; i < A.length; i++) {
              D.setAttribute(A[i].name, A[i].value);
            }
            while (P.firstChild) {
              D.appendChild(P.firstChild);
            }
            P.parentNode.replaceChild(D, P);
          }
        })();
        (async () => {
          if (document.body.innerHTML.includes("403 Forbidden")) return;
          if (document.title.includes("404")) return;
          document.querySelectorAll("*").forEach(function (e) {
            if (e.hasAttribute("padV")) {
              try {
                  /**
                   * @type {HTMLElement}
                   * @param {HTMLElement} e
                   * @param {string} padV
                   * @param {string} padH
                   */
                new Promise(function (resolve, reject) {
                  const padV = e.getAttribute("padV");
                  resolve(padV);
                }).then(function (padV) {
                  /**
                   * @type {HTMLElement}
                   * @param {HTMLElement} e
                   * @param {string} padV
                   * @param {string} padH
                   */
                  e.style.paddingTop = padV;
                  e.style.paddingBottom = padV;
                  e.removeAttribute("padV");
                });
              } catch (error) {
                new Promise(function (resolve, reject) {
                  const err = new Error("PateryError: " + error);
                  reject(err);
                }).then(function (err) {
                  console.error(err);
                });
              }
            }
            if (e.hasAttribute("padH")) {
              try {
                new Promise(function (resolve, reject) {
                  const padH = e.getAttribute("padH");
                  resolve(padH);
                }).then(function (padH) {
                  e.style.paddingLeft = padH;
                  e.style.paddingRight = padH;
                  e.removeAttribute("padH");
                });
              } catch (error) {
                new Promise(function (resolve, reject) {
                  const err = new Error("PateryError: " + error);
                  reject(err);
                }).then(function (err) {
                  console.error(err);
                });
              }
            }
          });
        })();
        (async () => {
          if (document.body.innerHTML.includes("403 Forbidden")) return;
          if (document.title.includes("404")) return;
          document.querySelectorAll("*").forEach(function (e) {
            if (e.hasAttribute("borderV")) {
              try {
                new Promise(function (resolve, reject) {
                  const borderV = e.getAttribute("borderV");
                  resolve(borderV);
                }).then(function (borderV) {
                  (e.style.borderTop = borderV),
                  (e.style.borderBottom = borderV),
                  e.removeAttribute("borderV");
                });
              } catch (error) {
                new Promise(function (resolve, reject) {
                  reject(new Error("PateryError: " + error));
                }).then(function (err) {
                  console.error(err);
                });
              }
            }
            if (e.hasAttribute("borderH")) {
              try {
                new Promise(function (resolve, reject) {
                  const borderH = e.getAttribute("borderH");
                  resolve(borderH);
                }).then(function (borderH) {
                  (e.style.borderLeft = borderH),
                  (e.style.borderRight = borderH),
                  e.removeAttribute("borderH");
                });
              } catch (error) {
                new Promise(function (resolve, reject) {
                  reject(new Error("PateryError: " + error));

                }).then(function (err) {
                  console.error(err);
                });
              }
            }
          });
        })();
      }
    })();
    (() => {
      const css = document.createElement("link");
      css.rel = "stylesheet";
      css.type = "text/css";
      css.href = "https://cdn.jsdelivr.net/npm/patery-ui/patery-ui.css";
      document.head.appendChild(css);
    })();
    (() => {
      if(document.querySelectorAll("PateryButton")){
        new Promise(() => {
          const P = document.querySelector("PateryButton");
          const B = document.createElement("button");
          // set class for B = tagName of P
          B.className = P.tagName.toLowerCase();
          const A = P.attributes;
          for (let i = 0; i < A.length; i++) {
            B.setAttribute(A[i].name, A[i].value);
          }
          while (P.firstChild) {
            B.appendChild(P.firstChild);
          }
          P.parentNode.replaceChild(B, P);
        })
      }
      
    })();
    (() => {
      function createRipple(event) {
        const B = event.currentTarget;
        const C = document.createElement("span");
        const D = Math.max(B.clientWidth, B.clientHeight);
        const RA = D / 2;
        C.style.width = C.style.height = `${D}px`;
        C.style.left = `${event.clientX - B.offsetLeft - RA}px`;
        C.style.top = `${event.clientY - B.offsetTop - RA}px`;
        C.classList.add("ri-67");
        const R = B.getElementsByClassName("ri-67")[0];
        if (R) {
          R.remove();
        }
        B.appendChild(C);
      };
      const BS = document.querySelectorAll(".paterybutton");
      BS.forEach(button => {
        button.addEventListener("click", createRipple);
      });
      
    })();
})()))))));