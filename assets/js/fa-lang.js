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


////////////////////////////////////////
//////////    Vazir Matn     ///////////
////////////////////////////////////////

// Load the Vazirmatn font
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Vazirmatn&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// Apply font to elements containing Persian text
function isPersian(text) {
  return /[\u0600-\u06FF]/.test(text);
}

function applyVazirmatnFont() {
  const allElements = document.querySelectorAll('body *');
  allElements.forEach(el => {
    if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE && isPersian(el.textContent)) {
      el.style.fontFamily = '"Vazirmatn", sans-serif';
    }
  });
}

// Run it once after DOM loads
document.addEventListener('DOMContentLoaded', applyVazirmatnFont);
