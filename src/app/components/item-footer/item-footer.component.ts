import { Component } from '@angular/core';
import { EButtonTypes } from '../icon-item/buttonTypes';
@Component({
  selector: 'app-item-footer',
  templateUrl: './item-footer.component.html',
  styleUrls: ['./item-footer.component.scss']
})
export class ItemFooterComponent {
  public EButtonTypes = EButtonTypes;
}
