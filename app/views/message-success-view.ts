import { View } from "./abstract-view.js";

export class MessageSuccessView extends View<string> {

  private static readonly MESSAGE_SUCCESS = "Deal added!";

  protected override createTemplate(model: string): string {

    return `
          <p class="alert alert-info">
          ${model}, ${MessageSuccessView.MESSAGE_SUCCESS}
          </p>
        `;
  }

}