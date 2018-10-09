import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemComponent,
  IconItemComponent, ItemContentComponent, ItemLogoComponent, ItemFooterComponent } from './components';
const COMPONENTS = [
  ItemComponent, IconItemComponent, ItemContentComponent, ItemLogoComponent, ItemFooterComponent
];
@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  exports: [ COMPONENTS],
  providers: [],
  bootstrap: []
})
export class ItemsItemModule {}
