// assets/js/fa.js

document.addEventListener("DOMContentLoaded", function () {
    const html = document.documentElement;
    const lang = html.getAttribute("lang");

    if (lang && lang.startsWith("فا")) {
        html.setAttribute("dir", "rtl");
        html.style.direction = "rtl";
        document.body.style.direction = "rtl";
        document.body.style.textAlign = "right";
    }
});
