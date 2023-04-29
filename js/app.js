(() => {
    "use strict";
    var __webpack_modules__ = {
        794: () => {
            const calculator = document.querySelector(".dial-calc");
            const output = document.querySelector(".calc__output input");
            calculator.addEventListener("click", (function(e) {
                const target = e.target;
                if (target.hasAttribute("data-num")) if (output.value === "0") {
                    output.value = "";
                    const num = target.querySelector("span").textContent;
                    output.value += num;
                } else {
                    const num = target.querySelector("span").textContent;
                    output.value += num;
                }
                if (target.hasAttribute("data-act")) if (output.value.slice(-1) !== "+" && output.value.slice(-1) !== "-" && output.value.slice(-1) !== "*" && output.value.slice(-1) !== "/") {
                    const act = target.querySelector("span").textContent;
                    output.value += act;
                    console.log("yyy");
                }
                if (target.hasAttribute("data-dot")) if (/\./.test(output.value)) console.log("noooo"); else {
                    const dot = target.querySelector("span").textContent;
                    output.value += dot;
                }
                if (target.hasAttribute("data-equal")) if (output.value.slice(-1) !== "+" && output.value.slice(-1) !== "-" && output.value.slice(-1) !== "*" && output.value.slice(-1) !== "/") output.value = eval(output.value);
                if (target.hasAttribute("data-delete")) output.value = output.value.slice(0, -1);
                if (target.hasAttribute("data-clear")) output.value = "0";
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    var __webpack_exports__ = {};
    (() => {
        __webpack_require__(794);
        window["FLS"] = false;
    })();
})();