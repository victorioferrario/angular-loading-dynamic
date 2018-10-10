import { ButtonTypes , ButtonIconTypes} from '../../models';
import { Component, Input } from '@angular/core';
import { IconEnumAware, IconEnum } from './icon-aware.component';
@Component({
  selector: 'app-icon-dynamic',
  template: `
        <span class="item-icon yes-label" *ngIf="text!==null">
            <span class="item-icon-image">
                <img  src="{{buttonIconType}}" height="24" width="24">
            </span>
            <span class="item-icon-label" [fxShow.xs]="false">{{text}}</span>
        </span>
        <span class="item-icon no-label" *ngIf="text===null">
            <span class="item-icon-image">
                <img class="{{validateButtonType()}}"  src="{{buttonIconType}}" height="24" width="24" /></span>
        </span>
        `,
  styles: [`
  :host {
      display:inline-block
  }
  .item-icon {
    padding: 1px;
    position: relative;
    line-height: 24px;
    display: inline-block;
  }
  .no-label {
    padding-left: 6px;
    padding-right: 12px;
  }
  .yes-label {
    padding-left: 3px;
    margin-left: 5px;
    display: inline-block;
  }
  .item-icon-image {
    padding-top: 2px;
    padding-left: 0px;
    padding-right: 0;
    position: relative;
    display: inline-block;
  }
  .item-icon-label {
    font-size: 14px;
    line-height: 24px;
    padding-left: 6px;
    padding-right: 6px;
    position: relative;
    display: inline-block;
    top: -7px;
    transition: all cubic-bezier(0.25, 0.46, 0.45, 0.94) 300ms;
  }
  .flipped-img {
    transform: scaleX(-1);
  }
  @media screen and (max-width: 786px) {
    .item-icon-label {
      font-size: 12px;
      display: inline-block;
    }
  }
  @media screen and (max-width: 726px) {
    .item-icon-label {
      display: none;
    }
    .item-icon-image {
      padding-left: 4px;
      padding-right: 7px;
    }
  }
  @media screen and (min-width: 728px) {
    .item-icon-label {
      display: inline;
    }
  }
  `]
})
@IconEnumAware
export class DynamicIconComponent {
  public ButtonTypes = ButtonTypes;
  @Input()
  buttonType: ButtonTypes;
  @Input()
  buttonIconType: ButtonIconTypes;
  @Input()
  text: string | null;

  public databind(text: string|null,
    buttonType: ButtonTypes,
    buttonIconType: ButtonIconTypes) {
    this.text = text;
    this.buttonType = buttonType;
    this.buttonIconType = buttonIconType;
  }
  protected validateButtonType() {
      return this.buttonType === ButtonTypes.ROCKET ? 'rocket flipped-img' : '';
  }
}
