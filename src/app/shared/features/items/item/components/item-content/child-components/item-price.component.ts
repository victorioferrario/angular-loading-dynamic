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
              box-sizing: border-box;
        -webkit-box-flex: 1;
        max-width: 10%;
      }
      .flow {
  display: flex;
  box-sizing: border-box;
  -webkit-box-direction: normal;

  .row {
    flex-direction: row;
    -webkit-box-orient: horizontal;
  }

  .column {
    flex-direction: column;
    -webkit-box-orient: vertical;
    height: 70px; /*  important for sizing of row heights */
    margin-bottom: 0;
  }
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
      .item_75,
.item_40,
.item_20,
.item_10,
.item_05 {
  flex: 1 1 100%;
  box-sizing: border-box;
  -webkit-box-flex: 1;
}

.row .item_75 {
  max-width: 75%;
}
.row .item_40 {
  max-width: 40%;
}
.row .item_20 {
  max-width: 20%;
}
.row .item_10 {
  max-width: 10%;
}
    `
  ]
})
export class ItemPriceComponent {
  @Input()
  listItem: IItem;
}
