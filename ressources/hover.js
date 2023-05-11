export function addClassOnHover(element) {
    const iconElement = element.querySelector("i");
    iconElement.classList.add("fa-beat-fade");
}

export function removeClassOnHover(element) {
    const iconElement = element.querySelector("i");
    iconElement.classList.remove("fa-beat-fade");
}