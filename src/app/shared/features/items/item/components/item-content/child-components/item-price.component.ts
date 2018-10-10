import { Component, Input } from '@angular/core';
import { IItem } from '@hubx/domain';
@Component({
  selector: 'app-item-prices',
  template: `
    <div [fxShow.xs]="false" class="item-col-right item_10">
        <span class="item-sub-Title">Price</span>
        <span class="item-price">$ {{listItem.prices[0].unitPrice}}.00<br /></span>
    </div>
  `,
  styles: [
    `
      :host {
        flex: 1 1 100%;
        box-sizing: border-box;
        -webkit-box-flex: 1;
        max-width: 10%;
      }
      .item-col-right {
        color: #000;
        // transition: all cubic-bezier(0.19, 1, 0.22, 1) 200ms;
      }
      .item-col-left,
      .item-col-right {
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: center;
        font-size: 11px;
      }
      .item-sub-Title {
        font-size: 14px;
        display: block;
      }

      .item-price {
        margin-top: 10px;
        display: block;
        clear: both;
      }
    `
  ]
})
export class ItemPriceComponent {
  @Input()
  listItem: IItem;
}
