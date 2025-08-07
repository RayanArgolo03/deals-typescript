import { DealController } from "./controllers/deal-controller.js";
const dealController = new DealController();
function submit() {
    const submitForm = document.querySelector(".form");
    submitForm.addEventListener('submit', event => {
        event.preventDefault();
        const deal = dealController.createDeal();
        console.log(deal);
        dealController.persistDeal(deal);
        dealController.clearForm();
    });
}
function clear() {
    const clearButton = document.querySelector("#clear");
    clearButton.addEventListener('click', event => {
        event.preventDefault();
        dealController.clearDeals();
    });
}
submit();
clear();
