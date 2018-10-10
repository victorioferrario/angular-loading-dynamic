import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Third party
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {
  ItemComponent,
  IconItemComponent,
  ItemLogoComponent,
  ItemPriceComponent,
  ItemFooterComponent,
  ItemContentComponent,
  InventoryListComponent,
  InventoryItemComponent,
  DynamicIconComponent
} from './components';

const COMPONENTS = [
  ItemComponent,
  IconItemComponent,
  ItemLogoComponent,
  ItemPriceComponent,
  ItemFooterComponent,
  ItemContentComponent,
  InventoryItemComponent,
  InventoryListComponent,
  DynamicIconComponent
];
@NgModule({
  exports: [COMPONENTS],
  entryComponents: [IconItemComponent, DynamicIconComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    TooltipModule.forRoot(),
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  declarations: [COMPONENTS]
})
export class ItemsItemModule {}
