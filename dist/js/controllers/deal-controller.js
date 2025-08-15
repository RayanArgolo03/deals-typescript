import { DaysOfWeek } from "../enums/days-of-week.js";
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
        this.updateDealsView();
    }
    createDeal() {
        const dateParsed = new Date(this._inputDate.value);
        this.validateDate(dateParsed);
        return Deal.createDeal(dateParsed, this._inputQuantity.value, this._inputValue.value);
    }
    validateDate(dateParsed) {
        const dayParsed = dateParsed.getDay();
        if (dayParsed == DaysOfWeek.SATURDAY || dayParsed == DaysOfWeek.MONDAY) {
            this._inputDate.classList.remove("is-valid");
            this._inputDate.classList.add("is-invalid");
            throw new Error();
        }
        this._inputDate.classList.remove("is-invalid");
    }
    persistDeal(deal) {
        this._deals.push(deal);
        this.updateDealsView();
        this.updateMessageView(true);
    }
    clearForm() {
        this._inputDate.value = '';
        this._inputValue.value = '';
        this._inputQuantity.value = '';
    }
    clearDeals() {
        if (this._deals.length == 0) {
            this.updateMessageView(false);
            return;
        }
        this._deals = [];
        this.updateDealsView();
    }
    updateDealsView() {
        this._dealsView.update(this._deals);
    }
    updateMessageView(hasSucess) {
        if (!hasSucess) {
            this._alertContainerView.update(DealController.MESSAGE_MODEL, DealController.STOP_TIMEOUT);
            return;
        }
        this._messageSucessView.update(DealController.MESSAGE_MODEL, DealController.STOP_TIMEOUT);
    }
}
DealController.MESSAGE_MODEL = "Warning:";
DealController.STOP_TIMEOUT = 2000;
