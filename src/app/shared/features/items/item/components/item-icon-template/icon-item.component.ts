import { ButtonTypes } from '../../models';
import { Component, Input } from '@angular/core';
import { IconEnumAware } from './icon-aware.component';
@Component({
  selector: 'app-icon-item',
  templateUrl: './icon-item.component.html',
  styleUrls: ['./icon-item.component.scss']
})
@IconEnumAware
export class IconItemComponent {
  public ButtonTypes = ButtonTypes;
  @Input()
  buttonType: ButtonTypes;
  @Input()
  text: string;
}
