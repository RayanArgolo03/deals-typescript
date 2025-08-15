export class Deal {
    constructor(_date, _quantity, _value) {
        this._date = _date;
        this._quantity = _quantity;
        this._value = _value;
    }
    static createDeal(dateParsed, quantityString, valueString) {
        const quantityParsed = parseInt(quantityString);
        const valueParsed = parseFloat(valueString);
        return new Deal(dateParsed, quantityParsed, valueParsed);
    }
    get formattedDate() {
        return new Intl.DateTimeFormat()
            .format(this._date);
    }
    get quantity() {
        return this._quantity;
    }
    get value() {
        return this._value;
    }
    get volume() {
        return (this.quantity * this.value).toFixed(2);
    }
}
