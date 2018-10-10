import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ItemComponent,
  IconItemComponent,
  ItemLogoComponent,
  ItemPriceComponent,
  ItemFooterComponent,
  ItemContentComponent,
  InventoryListComponent,
  InventoryItemComponent
} from './components';

const COMPONENTS = [
  ItemComponent,
  IconItemComponent,
  ItemLogoComponent,
  ItemPriceComponent,
  ItemFooterComponent,
  ItemContentComponent,
  InventoryItemComponent,
  InventoryListComponent
];
@NgModule({
  exports: [COMPONENTS],
  entryComponents: [IconItemComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  declarations: [COMPONENTS]
})
export class ItemsItemModule {}
