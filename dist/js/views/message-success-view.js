import { View } from "./abstract-view.js";
export class MessageSuccessView extends View {
    createTemplate(model) {
        return `
          <p class="alert alert-info">
          ${model}, ${MessageSuccessView.MESSAGE_SUCCESS}
          </p>
        `;
    }
}
MessageSuccessView.MESSAGE_SUCCESS = "Deal added!";
