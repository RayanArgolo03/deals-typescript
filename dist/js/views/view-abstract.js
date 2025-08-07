export class View {
    constructor(selector) {
        const auxElement = document.querySelector(selector);
        if (!auxElement)
            throw new Error(`Element ${selector} not exists!`);
        this._element = auxElement;
    }
    update(model) {
        this._element.innerHTML = this.createTemplate(model);
    }
}
