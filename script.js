import styles from "./styles.js";

function run() {
    const classes = document.querySelectorAll('[class^="mini-"]');

    classes.forEach((element) => {
        const elementClass = element.getAttribute("class");
        const miniClass = elementClass
            .split(" ")
            .filter((cls) => cls.startsWith("mini-"));
        for (let i = 0; i < miniClass.length; i++) {
            if (miniClass[i] in styles) {
                element.setAttribute(
                    "style",
                    (element.getAttribute("style") || "") +
                        styles[miniClass[i]],
                );
                element.classList.remove(miniClass[i]);
                if (element.classList.length === 0) {
                    element.removeAttribute("class");
                }
            } else {
                console.log("Not a mini class");
            }
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
} else {
    run();
}
