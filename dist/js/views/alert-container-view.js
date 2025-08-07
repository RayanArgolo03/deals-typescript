import { View } from "./abstract-view.js";
export class AlertContainerView extends View {
    createTemplate(model) {
        return `
         <div class="alert alert-warning alert-dismissible fade show" role="alert">
          ${model}
    </div>
  `;
    }
}
