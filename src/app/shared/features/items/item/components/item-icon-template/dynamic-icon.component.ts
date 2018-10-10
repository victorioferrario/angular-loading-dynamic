import { ButtonTypes , ButtonIconTypes, TooltipColor, TooltipText} from '../../models';
import { Component, Input } from '@angular/core';
import { IconEnumAware, IconEnum } from './icon-aware.component';
@Component({
  selector: 'app-icon-dynamic',
  template: `
        <span class="item-icon yes-label{{tooltipText!==null? ' wrapper':''}}" *ngIf="text!==null">
          <span class="tooltip {{tooltipColor}} {{buttonType}}">{{tooltipText}}</span>
            <span class="item-icon-image">
                <img  src="{{buttonIconType}}" height="24" width="24">
            </span>
            <span class="item-icon-label" [fxShow.xs]="false">{{text}}</span>
        </span>
        <span class="item-icon no-label{{ this.verifyStyle() }}" *ngIf="text===null">
            <span class="tooltip {{tooltipColor}} {{buttonType}}">{{tooltipText}}</span>
            <span class="item-icon-image">
                <img class="{{validateButtonType()}}"  src="{{buttonIconType}}" height="24" width="24" /></span>
        </span>
        `,
        styleUrls: [
          './dynamic-icon.componet.scss',
          './dynamic-icon.tooltip.compoent.scss'
      ]
})
@IconEnumAware
export class DynamicIconComponent {

  @Input()
  tooltipColor: TooltipColor;
  @Input()
  tooltipText: TooltipText | null | string;

  public ButtonTypes = ButtonTypes;
  @Input()
  buttonType: ButtonTypes;
  @Input()
  buttonIconType: ButtonIconTypes;
  @Input()
  text: string | null;

  public databind(text: string|null,
    buttonType: ButtonTypes,
    buttonIconType: ButtonIconTypes,
    tooltipText: TooltipText| null | string,
    tooltipColor: TooltipColor| null ) {
    this.text = text;
    this.buttonType = buttonType;
    this.buttonIconType = buttonIconType;
    this.tooltipText = tooltipText;
    this.tooltipColor = tooltipColor;
  }
  verifyStyle() {
    return this.tooltipText !== null ?
    ' wrapper' : this.buttonType === ButtonTypes.RESTRICTIONS ? ' wrapper' : '';
  }
  protected validateButtonType() {
      return this.buttonType === ButtonTypes.ROCKET ? 'rocket flipped-img' : '';
  }
}
