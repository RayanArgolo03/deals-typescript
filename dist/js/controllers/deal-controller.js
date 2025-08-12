import { Deal } from "../models/deal.js";
import { AlertContainerView } from "../views/alert-container-view.js";
import { DealsView } from "../views/deals-view.js";
import { MessageSuccessView } from "../views/message-success-view.js";
export class DealController {
    constructor() {
        this._inputDate = document.querySelector("#date");
        this._inputQuantity = document.querySelector("#quantity");
        this._inputValue = document.querySelector("#value");
        this._deals = [];
        this._dealsView = new DealsView("#dealsViewers");
        this._alertContainerView = new AlertContainerView("#alertContainer");
        this._messageSucessView = new MessageSuccessView("#messageSuccess");
        this.updateAllViews();
    }
    createDeal() {
        const dateParsed = new Date(this._inputDate.value);
        this.validateDate(dateParsed);
        const quantityParsed = parseInt(this._inputQuantity.value);
        const valueParsed = parseFloat(this._inputValue.value);
        return new Deal(dateParsed, quantityParsed, valueParsed);
    }
    validateDate(dateParsed) {
        const dayParsed = dateParsed.getDay();
        if (dayParsed == 0 || dayParsed == 6) {
            this._inputDate.classList.remove("is-valid");
            this._inputDate.classList.add("is-invalid");
            throw new Error();
        }
        this._inputDate.classList.remove("is-invalid");
    }
    persistDeal(deal) {
        this._deals.push(deal);
        this.updateAllViews(false);
    }
    clearForm() {
        this._inputDate.value = '';
        this._inputValue.value = '';
        this._inputQuantity.value = '';
    }
    clearDeals() {
        if (this._deals.length > 0) {
            this._dealsView.update([]);
            this._deals = [];
        }
        else {
            this.updateAllViews(true);
        }
        ;
    }
    updateAllViews(isFail) {
        this._dealsView.update(this._deals);
        if (isFail != undefined) {
            if (isFail) {
                this._alertContainerView.update(DealController.MESSAGE_ALERT, DealController.STOP_TIMEOUT);
            }
            else {
                this._messageSucessView.update(DealController.MESSAGE_SUCCESS, DealController.STOP_TIMEOUT);
            }
        }
    }
}
DealController.MESSAGE_ALERT = "No deals for delete!";
DealController.MESSAGE_SUCCESS = "New Deal added!";
DealController.STOP_TIMEOUT = 2000;
