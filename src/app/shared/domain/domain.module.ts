import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsContext } from './items/item.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [ItemsContext]
})
export class DomainModule {}
