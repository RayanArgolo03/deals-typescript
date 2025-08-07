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
        this._dealsView.update(this._deals);
        this._alertContainerView = new AlertContainerView("#alertContainer");
        this._messageSucessView = new MessageSuccessView("#messageSuccess");
    }
    createDeal() {
        const dateParsed = new Date(this._inputDate.value);
        const quantityParsed = parseInt(this._inputQuantity.value);
        const valueParsed = parseFloat(this._inputValue.value);
        return new Deal(dateParsed, quantityParsed, valueParsed);
    }
    persistDeal(deal) {
        this._deals.push(deal);
        this._dealsView.update(this._deals);
        this._messageSucessView.update(DealController.MESSAGE_SUCCESS, 2000);
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
            this._alertContainerView.update(DealController.MESSAGE_ALERT, 2000);
        }
        ;
    }
}
DealController.MESSAGE_ALERT = "No deals for delete!";
DealController.MESSAGE_SUCCESS = "New Deal added!";
