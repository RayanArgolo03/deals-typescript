import { View } from "./abstract-view.js";

export class AlertContainerView extends View<string> {

  private static readonly MESSAGE_ALERT = "No deals for delete!";

  protected override createTemplate(model: string): string {
    return `
         <div class="alert alert-warning alert-dismissible fade show" role="alert">
         ${model}, ${AlertContainerView.MESSAGE_ALERT}
    </div>
  `
  }

  

}