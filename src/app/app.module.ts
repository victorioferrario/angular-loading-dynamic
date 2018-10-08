import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemComponent } from './components/item/item.component';
import { IconItemComponent } from './components/icon-item/icon-item.component';
import { ItemFooterComponent } from './components/item-footer/item-footer.component';
import { ItemContentComponent } from './components/item-content/item-content.component';
@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemFooterComponent,
    IconItemComponent,
    ItemContentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
