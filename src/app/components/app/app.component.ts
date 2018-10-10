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
} from '@hubx/domain';

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
    const self = this;
    self.itemContext.getPayload().subscribe(
      (data: IRequestPaginationItems) => {
      self.ds.next(data.values);
    });
  }
  ngAfterViewInit() {}
  trackByFn(index: any, item: IItem) {
    return item.id;
  }
}
