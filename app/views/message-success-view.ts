import { View } from "./abstract-view.js";

export class MessageSuccessView extends View<string> {

    protected createTemplate(model: string): string {
        return `
          <p class="alert alert-info">${model}</p>
        `;
    }

}