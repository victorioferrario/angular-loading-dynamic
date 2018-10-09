import { Component } from '@angular/core';
import { ButtonTypes} from '../../models/ButtonTypes';
@Component({
  selector: 'app-items-item-footer',
  templateUrl: './item-footer.component.html',
  styleUrls: ['./item-footer.component.scss']
})
export class ItemFooterComponent {
    public ButtonTypes = ButtonTypes;
}
