const buttonAccordion = document.querySelectorAll('[data-accordion]');

function toggleAccordion(event) {
    const element = event.target;
    const questResponse = element.nextElementSibling;

    element.classList.toggle("active");
    questResponse.classList.toggle("active");

    if (element.getAttribute("class")) {
        element.children[0].src = "./assets/icon-arrow-down.svg";
    } else {
        element.children[0].src = "./assets/icon-arrow-up.svg";

    }
}

buttonAccordion.forEach((button) => {
    button.addEventListener("click", toggleAccordion);
})