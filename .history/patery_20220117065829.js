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
// get all name of properties style
const getAllStyle = (obj) => {
  const style = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      style.push(key);
    }
  }
  return style;
};
console.log(getAllStyle({
  color: 'red',
  fontSize: '12px',
}));


console.log(getStyle(document.body));
const elementTagName = "Patery" + getStyle(document.body)
const P = document.querySelector();
const D = document.createElement("div");
const A = P.attributes;
for (let i = 0; i < A.length; i++) {
  D.setAttribute(A[i].name, A[i].value);
}
while (P.firstChild) {
  D.appendChild(P.firstChild);
}
P.parentNode.replaceChild(D, P);
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
