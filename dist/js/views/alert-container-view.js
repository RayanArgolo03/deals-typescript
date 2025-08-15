import { View } from "./abstract-view.js";
export class AlertContainerView extends View {
    createTemplate(model) {
        return `
         <div class="alert alert-warning alert-dismissible fade show" role="alert">
         ${model}, ${AlertContainerView.MESSAGE_ALERT}
    </div>
  `;
    }
}
AlertContainerView.MESSAGE_ALERT = "No deals for delete!";
