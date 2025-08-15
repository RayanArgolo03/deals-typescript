

import { Deal } from "../models/deal.js";
import { View } from "./abstract-view.js";

export class DealsView extends View<Deal[]> {

    protected createTemplate(model?: Deal[]): string {
        return `
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                 <th>DATE</th>
                 <th>QUANTITY</th>
                 <th>VALUE</th>
                 <th>VOLUME</th>
              </tr>
            </thead>
            <tbody id="tbody">
             ${model.map(deal => `
               <tr>
                  <td>${deal.formattedDate}</td>
                  <td>${deal.quantity}</td>
                  <td>${deal.value}</td>
                  <td>${deal.volume}</td>
               </tr>
              `).join("")}
            </tbody>
          </table>
        `;   
    }

}