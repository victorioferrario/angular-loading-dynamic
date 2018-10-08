import { Component } from '@angular/core';
import { EButtonTypes } from './components/icon-item/buttonTypes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  EButtonTypes = EButtonTypes;
  title = 'angular-universal';
}
