

export abstract class View<T> {

    protected _element: HTMLElement;

    constructor(selector: string | null) {
        const auxElement = document.querySelector<HTMLElement>(selector);
        if (!auxElement) throw new Error(`Element ${selector} not exists!`);
        this._element = auxElement;
    }


    public update(model: T, stopTimeout?: number): void {
        this._element.innerHTML = this.createTemplate(model);

        if (stopTimeout) {
            setTimeout(() => {
                this._element.innerHTML = ' ';
            }, stopTimeout);
        }
    }

    protected abstract createTemplate(model: T): string;

}
