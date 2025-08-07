import { View } from "./abstract-view.js";

export class MessageSuccessView extends View<string> {

    public createTemplate(model: string): string {
        return `
          <p class="alert alert-info">${model}</p>
        `;
    }

}