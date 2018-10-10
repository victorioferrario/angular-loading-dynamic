import { Component, Input } from '@angular/core';
import { IItem } from './../../../../../domain/items';
import { InventoryTypes } from '../../models';
@Component({
  selector: 'app-items-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.scss']
})
export class ItemContentComponent {
  public InventoryTypes = InventoryTypes;
  @Input()
  item: IItem;
  constructor() {}
}
