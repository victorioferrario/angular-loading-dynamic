import { Injectable } from '@angular/core';
import { DataEmitter } from './emitters';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { IItem, IRequestPaginationItems } from './models';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItemsContext {
  constructor(private http: HttpClient) {}
  public getPayload(): Observable<IRequestPaginationItems> {
    return this.http
      .get<IRequestPaginationItems>('assets/data/items.json')
      .pipe(share());
  }
}
