
export class Deal {

    constructor(
        private _date: Date,
        private _quantity: number,
        private _value: number
    ) {}

    public static createDeal(dateParsed: Date, quantityString: string, valueString: string,): Deal {
        
        const quantityParsed = parseInt(quantityString);
        const valueParsed = parseFloat(valueString);

        return new Deal(dateParsed, quantityParsed, valueParsed);
    }

    get formattedDate(): string {
        return new Intl.DateTimeFormat()
               .format(this._date);
    }

    get quantity(): number {
        return this._quantity;
    }

    
    get value(): number {
        return this._value;
    }


    get volume(): string{
        return (this.quantity * this.value).toFixed(2);
    }


}