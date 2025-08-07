

import { Deal } from "../models/deal.js";
import { AlertContainerView } from "../views/alert-container-view.js";
import { DealsView } from "../views/deals-view.js";
import { MessageSuccessView } from "../views/message-success-view.js";

export class DealController {

    private _inputDate: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private _deals: Deal[];
    private _dealsView: DealsView;
    private _alertContainerView: AlertContainerView;
    private _messageSucessView: MessageSuccessView;
    
    private static readonly MESSAGE_ALERT = "No deals for delete!";
    private static readonly MESSAGE_SUCCESS = "New Deal added!";
    
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


    createDeal(): Deal {

        const dateParsed = new Date(this._inputDate.value);
        const quantityParsed = parseInt(this._inputQuantity.value);
        const valueParsed = parseFloat(this._inputValue.value);

        return new Deal(dateParsed, quantityParsed, valueParsed);
    }

    persistDeal(deal: Deal): void {
        this._deals.push(deal);
        this._dealsView.update(this._deals);
        this._messageSucessView.update(
            DealController.MESSAGE_SUCCESS, 2000
        );
    }

    clearForm(): void {
        this._inputDate.value = '';
        this._inputValue.value = '';
        this._inputQuantity.value = '';
    }

    clearDeals(): void {
        if (this._deals.length > 0) {
            this._dealsView.update([]);
            this._deals = [];
        } else {
            this._alertContainerView.update(
                DealController.MESSAGE_ALERT, 2000
            );
        };
    }
}