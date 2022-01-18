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
const _DARK = "dark";
const _LIGHT = "light";
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
          if(document.querySelector("PateryPadding") || document.querySelectorAll("PateryPadding")) {
            document.querySelectorAll("PateryPadding").forEach(P => {
              const D = document.createElement("div");
              const A = P.attributes;
              for (let i = 0; i < A.length; i++) {
                D.setAttribute(A[i].name, A[i].value);
              }
              while (P.firstChild) {
                D.appendChild(P.firstChild);
              }
              P.parentNode.replaceChild(D, P);
            })  
            
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
        // (() => {
        //   const css = document.createElement("link");
        //   css.rel = "stylesheet";
        //   css.type = "text/css";
        //   css.href = "https://cdn.jsdelivr.net/npm/patery-ui@1.0.8/patery-ui.css";
        //   document.head.appendChild(css);
        // })();
        (() => {
          if(document.querySelector("PateryMode")) {
            document.querySelectorAll("PateryMode").forEach(ES => {
              eval(eval(eval(eval(eval(
                /**
                 * @param {string} str
                 * @return {string}
                 * @description
                 * @param {string} str
                 */
                (function(){
                  const M = document.createElement("div");
                  const A = ES.attributes;
                  for (let i = 0; i < A.length; i++) {
                    M.setAttribute(A[i].name, A[i].value);
                  } while (ES.firstChild) {
                    M.appendChild(ES.firstChild);
                  } ES.parentNode.replaceChild(M, ES);
                  const D = window.matchMedia(`(prefers-color-scheme: dark)`),
                      L = window.matchMedia(`(prefers-color-scheme: light)`);
                  // get color theme from local storage or browser settings if not set yet
                  const theme = localStorage.getItem("theme");
                  if (theme === null) {
                    if (D.matches) {
                      localStorage.setItem("theme", "dark");
                    } else if (L.matches) {
                      localStorage.setItem("theme", "light");
                    } else {
                      localStorage.setItem("theme", "light");
                    }
                  }
                  // if is not dark or light mode then pick color from browser settings
                  if(!D.matches && !L.matches) {
                    if(window.matchMedia("(prefers-color-scheme: no-preference)").matches) {
                      if(window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
                        document.body.style.backgroundColor = "#1a1a1a";
                        document.body.style.color = "#fff";
                      } else {
                        document.body.style.backgroundColor = "#fff";
                        document.body.style.color = "#000";
                      }
                    }
                  } else {
                    // set dark mode and light mode for all elements
                    if (D.matches) {
                      document.querySelectorAll("*").forEach(function (e) {
                        if(document.querySelector("PateryButton")) {
                          document.querySelectorAll("PateryButton").forEach(P => {
                            const dark = "dark";
                            const CLASS = P.getAttribute("class");
                            const complete = dark + " " + CLASS;
                            P.setAttribute("class", complete);
                          })
                        }
                        if(e.tagName === "BODY") {
                          e.style.backgroundColor = "#1a1a1a";
                          e.style.color = "#fff";
                        }
                      });
                    } if (L.matches) {
                      document.querySelectorAll("*").forEach(function (e) {
                        if(document.querySelector("PateryButton")) {
                          document.querySelectorAll("PateryButton").forEach(P => {
                            const light = "light";
                            let CLASS = P.getAttribute("class");
                            if(CLASS === null) CLASS = "";
                            const complete = light + " " + CLASS;
                            // remove the same classes if exist in the button class attribute

                            P.className = complete;
        
                          })
                          document.querySelectorAll(".ri-67").forEach(P => {
                            P.style.backgroundColor = "var(--gray-light)";
                          })
                        }
                        if(e.tagName === "BODY") {
                          e.style.backgroundColor = "#fff";
                          e.style.color = "#000";
                        }
                      });
                    }
                  }
                })()
              )))));
            })
          }
        })();
        (() => {
          if(document.querySelector("PateryButton") || document.querySelectorAll("PateryButton")) {
              document.querySelectorAll("PateryButton").forEach(function (e) {
                const B = document.createElement("button");
                const A = e.attributes;
                
                for (let i = 0; i < A.length; i++) {
                  //
                  B.setAttribute(A[i].name, A[i].value);
                }
                while (e.firstChild) {
                  B.appendChild(e.firstChild);
                }
                const PClass = e.tagName.toLowerCase();
                const BClass = e.getAttribute("class");
                const complete = PClass + " " + BClass;
                B.setAttribute("class", complete);
                e.parentNode.replaceChild(B, e);
              });
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
        (() => {
          if(document.querySelectorAll("PateryButton")) {
            document.querySelectorAll("PateryButton").forEach(function (e) {
              const CLASS = e.classList;
              const CLASS_LIST = []
              for (let i = 0; i < CLASS.length; i++) {
                // split class other light and dark
                if(CLASS[i] === "light" || CLASS[i] === "dark") {
                  CLASS_LIST.push(CLASS[i]);
                  console.log(CLASS_LIST.length);
                }
              }
            });
          }
        })();
      }
    })();
    
})()))))));