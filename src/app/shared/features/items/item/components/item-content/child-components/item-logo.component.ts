import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-item-logo',
  template: `<div class="item-logo">
  <img src="https://cdn.hubx.com{{path}}"
                      class="manufacturerLogo" /></div>`,
  styles: [
    `
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
      .manufacturerLogo {
        width: 50px;
        height: 50px;
        margin: 5px;
      }
    `
  ]
})
export class ItemLogoComponent {
  @Input()
  path: string;
}
