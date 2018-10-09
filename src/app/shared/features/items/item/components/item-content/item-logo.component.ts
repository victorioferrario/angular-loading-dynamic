import { Component } from '@angular/core';
@Component({
  selector: 'app-item-logo-2',
  template: `<div class="item-logo">logo</div>`,
  styles: [`
  .item-col-left,
  .item-col-right {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-size: 11px;
  }
  .item-logo {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    background-color: #493b8d;
    margin: auto;
  }
  `]
})
export class ItemLogoComponent {
}
