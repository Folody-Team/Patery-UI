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
              e.style.borderTop = borderV;
              e.style.borderBottom = borderV;
              e.removeAttribute("borderV");
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
        if (e.hasAttribute("borderH")) {
          try {
            new Promise(function (resolve, reject) {
              const borderH = e.getAttribute("borderH");
              resolve(borderH);
            }).then(function (borderH) {
              e.style.borderLeft = borderH;
              e.style.borderRight = borderH;
              e.removeAttribute("borderH");
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
  }
})();
// load css file
(() => {
  if(document.querySelector("PateryButton")){
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
    }).then(() => {

      function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ri-67");
        const ripple = button.getElementsByClassName("ri-67")[0];
        if (ripple) {
          ripple.remove();
        }
        button.appendChild(circle);
      };
      const buttons = document.querySelectorAll(".paterybutton");
      for (const button of buttons) {
        button.addEventListener("click", createRipple);
      };
    });
  }
  
})();