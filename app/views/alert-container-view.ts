import { View } from "./abstract-view.js";


export class AlertContainerView extends View<string> {

    protected createTemplate(model: string): string {
        return `
         <div class="alert alert-warning alert-dismissible fade show" role="alert">
          ${model}
    </div>
  `
    }

}