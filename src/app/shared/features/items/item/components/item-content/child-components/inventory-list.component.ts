import { Component, Input } from '@angular/core';
import { IItem } from '@hubx/domain';
import { InventoryTypes } from '../../../models';

@Component({
  selector: 'app-inventory-lists',
  template: `<div [fxShow.xs]="false" class="item-col-right item_10">
        <span class="item-sub-Title">Available</span>
        <app-inventory-item [inventoryItem]="this.listItem" [inventoryType]="InventoryTypes.InStock"></app-inventory-item>
        <app-inventory-item [inventoryItem]="this.listItem" [inventoryType]="InventoryTypes.InTransit"></app-inventory-item>
    </div>`,
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
    `
  ]
})
export class InventoryListComponent {
  public InventoryTypes = InventoryTypes;
  @Input()
  public listItem: IItem;

  @Input()
  public inventoryType: InventoryTypes;
  constructor() {}
}
