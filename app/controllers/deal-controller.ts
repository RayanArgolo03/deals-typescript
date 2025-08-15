

import { DaysOfWeek } from "../enums/days-of-week.js";
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

    private static readonly MESSAGE_MODEL: string = "Warning:";
    private static readonly STOP_TIMEOUT: number = 2000;

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

    public createDeal(): Deal {

        const dateParsed = new Date(this._inputDate.value);
        this.validateDate(dateParsed);

        return Deal.createDeal(
            dateParsed,
            this._inputQuantity.value,
            this._inputValue.value,
        );

    }

    private validateDate(dateParsed: Date): void {

        const dayParsed = dateParsed.getDay();

        if (dayParsed == DaysOfWeek.SATURDAY || dayParsed == DaysOfWeek.MONDAY) {
            this._inputDate.classList.remove("is-valid");
            this._inputDate.classList.add("is-invalid");
            throw new Error();
        }

        this._inputDate.classList.remove("is-invalid");
    }

    public persistDeal(deal: Deal): void {
        this._deals.push(deal);
        this.updateDealsView();
        this.updateMessageView(true);
    }

    public clearForm(): void {
        this._inputDate.value = '';
        this._inputValue.value = '';
        this._inputQuantity.value = '';
    }

    public clearDeals(): void {

        if (this._deals.length == 0) {
            this.updateMessageView(false);
            return;
        }

        this._deals = [];
        this.updateDealsView();
    }

    private updateDealsView(): void {
        this._dealsView.update(this._deals);
    }

    private updateMessageView(hasSucess: boolean): void {

        if (!hasSucess) {
            this._alertContainerView.update(
                DealController.MESSAGE_MODEL,
                DealController.STOP_TIMEOUT,
            );
            return;
        }

        this._messageSucessView.update(
            DealController.MESSAGE_MODEL,
            DealController.STOP_TIMEOUT,
        );
    }

}
