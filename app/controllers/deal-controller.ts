

import { Deal } from "../models/deal.js";
import { AlertContainerView } from "../views/alert-container-view.js";
import { DealsView } from "../views/deals-view.js";
import { MessageSuccessView } from "../views/message-success-view.js";

export class DealController<T> {

    private _inputDate: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private _deals: Deal[];
    private _dealsView: DealsView;
    private _alertContainerView: AlertContainerView;
    private _messageSucessView: MessageSuccessView;

    private static readonly MESSAGE_ALERT = "No deals for delete!";
    private static readonly MESSAGE_SUCCESS = "New Deal added!";
    private static readonly STOP_TIMEOUT = 2000;

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


    public createDeal(): Deal {


        const dateParsed = new Date(this._inputDate.value);
        this.validateDate(dateParsed);

        const quantityParsed = parseInt(this._inputQuantity.value);
        const valueParsed = parseFloat(this._inputValue.value);

        return new Deal(dateParsed, quantityParsed, valueParsed);
    }

    private isValidDate(dateParsed: Date): void {

        const dayParsed = dateParsed.getDay();

        if (dayParsed == 0 || dayParsed == 6) {
            this._inputDate.classList.remove("is-valid");
            this._inputDate.classList.add("is-invalid");
            throw new Error();
        } 

        this._inputDate.classList.remove("is-invalid");
    }

    public persistDeal(deal: Deal): void {
        this._deals.push(deal);
        this.updateAllViews(false);
    }

    public clearForm(): void {
        this._inputDate.value = '';
        this._inputValue.value = '';
        this._inputQuantity.value = '';
    }

    public clearDeals(): void {
        if (this._deals.length > 0) {
            this._dealsView.update([]);
            this._deals = [];
        } else {
            this.updateAllViews(true);
        };
    }

    public updateAllViews(isFail?: boolean): void {

        this._dealsView.update(this._deals);

        if (isFail != undefined) {

            if (isFail) {
                this._alertContainerView.update(
                    DealController.MESSAGE_ALERT, DealController.STOP_TIMEOUT
                );
            } else {
                this._messageSucessView.update(
                    DealController.MESSAGE_SUCCESS, DealController.STOP_TIMEOUT
                )
            }

        }

    }
}