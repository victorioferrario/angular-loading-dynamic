import { Component, Input } from '@angular/core';
import { IItem } from '@hubx/domain';
import { InventoryTypes } from '../../../models';

@Component({
  selector: 'app-inventory-item',
  template: `
            <ng-container [ngSwitch]="inventoryType">
              <ng-container *ngSwitchCase="InventoryTypes.InStock">
                <ng-container *ngIf="this.isInStock()">
                  <span class="inventory-item">
                    <span class="inventory-value">
                        In Stock: {{this.inventoryItem.inventory.availableToSell}}</span>
                    </span>
                </ng-container>
                <ng-container *ngIf="this.isAvailableToSell()">
                  <span class="inventory-item">
                      <span class="inventory-value">
                        {{this.inventoryItem.inventory.availableToSell}}</span>
                    </span>
                </ng-container>
              </ng-container>
              <ng-container *ngSwitchCase="InventoryTypes.InTransit" >
                <ng-container *ngIf="this.isInTransit()">
                  <span class="inventory-item">
                    <span class="inventory-value">In Transit: {{this.inventoryItem.inventory.enRoute}}</span>
                  </span>
                </ng-container>
              </ng-container>
            </ng-container>
        `,
  styles: [
    `
      :host {
        display: block;
        margin-top: 8px;
      }
      .inventory-item {
        font-size: 10px;
        margin-top: 10px;
        display: block;
        clear: both;
      }
      .inventory-label {
        display: block;
      }
      .inventory-value {
        background: #f8f8f8;
        border-radius: 100px;
        padding: 0 6px;
        color: #999 !important;
        display: inline-block;
        margin-bottom: 4px;
      }
    `
  ]
})
export class InventoryItemComponent {
  public InventoryTypes = InventoryTypes;
  @Input()
  inventoryItem: IItem;

  @Input()
  inventoryType: InventoryTypes;

  constructor() {}

  isInStock() {
    return (
      this.inventoryItem.inventory.enRoute !== 0 &&
      this.inventoryItem.inventory.availableToSell !==
        this.inventoryItem.inventory.enRoute
    );
  }
  isAvailableToSell() {
    return (
      this.inventoryItem.inventory.availableToSell > 0 &&
      this.inventoryItem.inventory.enRoute === 0
    );
  }
  isInTransit() {
    return this.inventoryItem.inventory.enRoute !== 0;
  }
}
