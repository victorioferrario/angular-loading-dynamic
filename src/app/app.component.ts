import {
  Component,
  OnInit,
  Inject,
  ViewContainerRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {
  IRequestPaginationItems,
  ItemsContext,
  IItem
} from './shared/domain/items';
import { Builder } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-universal';
  ds: BehaviorSubject<IItem[] | null>;
  constructor(public itemContext: ItemsContext) {
    this.ds = new BehaviorSubject<IItem[]>(null);
    this.ds.asObservable();
  }
  ngOnInit(): void {
    this.itemContext.getPayload().subscribe((data: IRequestPaginationItems) => {
      this.ds.next(data.values);
    });
  }
  ngAfterViewInit() {}
  trackByFn(index: any, item: IItem) {
    return item.id;
  }
}
