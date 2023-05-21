export function initializeHoverPopup() {
    let hoverFooter = document.querySelector('.footer__hover-item');

    hoverFooter.addEventListener('mouseover', function() {
    let popup = this.querySelector('.footer-popup');
    popup.style.display = 'flex';
    })

    hoverFooter.addEventListener('mouseout', function() {
    let popup = this.querySelector('.footer-popup');
    popup.style.display = 'none';
    })
}