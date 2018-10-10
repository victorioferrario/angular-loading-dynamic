import { Component, Input } from '@angular/core';
import { IItem } from './../../../../../domain/items';
@Component({
  selector: 'app-items-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input()
  item: IItem;
}
