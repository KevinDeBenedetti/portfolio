export function initializeHoverNav() {
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
}