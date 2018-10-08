import { EButtonTypes } from './buttonTypes';
import { Component, Input } from '@angular/core';
import { IconEnumAware } from './icon-aware.component';
@Component({
  selector: 'app-icon-item',
  templateUrl: './icon-item.component.html',
  styleUrls: ['./icon-item.component.scss']
})
@IconEnumAware
export class IconItemComponent {
  public EButtonTypes = EButtonTypes;
  @Input()
  buttonType: EButtonTypes;
}
