
export class Deal {

    constructor(
        private _date: Date,
        private _quantity: number,
        private _value: number
    ) {}

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