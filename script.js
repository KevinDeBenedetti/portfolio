import { addClassOnHover, removeClassOnHover } from "./ressources/hover.js";

document.addEventListener("DOMContentLoaded", () => {
    const linkElements = document.querySelectorAll(".article-item__links a");
    linkElements.forEach((link) => {
        link.addEventListener("mouseover", () => addClassOnHover(link));
        link.addEventListener("mouseout", () => removeClassOnHover(link));
    });
});

  document.addEventListener("DOMContentLoaded", function () {
    const h3Elements = document.querySelectorAll("h3");
    const h3DummyElements = document.querySelectorAll(".h3-dummy");
  
    function checkScroll() {
      h3Elements.forEach((h3, index) => {
        const rect = h3.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  
        if (isVisible) {
          h3.style.position = "static";
          h3DummyElements[index].style.display = "none"; // Hide the dummy element
  
          // Reset other styles
          // ...
          h3.style.textTransform = "uppercase";
          h3.style.color = "var(--text-white)";
          h3.style.paddingTop = "24px"
        } else {
          h3.style.position = "sticky";
          h3DummyElements[index].style.display = "block"; // Show the dummy element
          h3DummyElements[index].style.height = h3.offsetHeight + "px"; // Set the height of the dummy element
  
          // Apply the desired styles
          // ...
          h3.style.top = "0";
          h3.style.left = "0";
          h3.style.width = "100%";
          h3.style.backgroundColor = "black";
          h3.style.zIndex = "1000";

          h3.style.fontWeight = "bold";


        }
      });
    }
  
    window.addEventListener("scroll", checkScroll);
    checkScroll();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            const bar = item.querySelector(".bar");
            bar.style.width = "60px";
        });

        item.addEventListener("mouseout", () => {
            const bar = item.querySelector(".bar");
            bar.style.width = "20px";
        });
    });
});

