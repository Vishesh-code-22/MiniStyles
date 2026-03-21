import styles from "./styles.js";

function run() {
    const classes = document.querySelectorAll('[class^="nano-"]');

    classes.forEach((element) => {
        const elementClass = element.getAttribute("class");
        const nanoClass = elementClass
            .split(" ")
            .filter((cls) => cls.startsWith("nano-"));
        for (let i = 0; i < nanoClass.length; i++) {
            if (nanoClass[i] in styles) {
                element.setAttribute(
                    "style",
                    (element.getAttribute("style") || "") +
                        styles[nanoClass[i]],
                );
                element.classList.remove(nanoClass[i]);
                if (element.classList.length === 0) {
                    element.removeAttribute("class");
                }
            } else {
                console.log("Not a nano class");
            }
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
} else {
    run();
}
