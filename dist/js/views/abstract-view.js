export class View {
    constructor(selector) {
        const auxElement = document.querySelector(selector);
        if (!auxElement)
            throw new Error(`Element ${selector} not exists!`);
        this._element = auxElement;
    }
    update(model, stopTimeout) {
        this._element.innerHTML = this.createTemplate(model);
        if (stopTimeout != undefined)
            this.removeTemplate(stopTimeout);
    }
    removeTemplate(stopTimeout) {
        setTimeout(() => {
            this._element.innerHTML = '';
        }, stopTimeout);
    }
}
