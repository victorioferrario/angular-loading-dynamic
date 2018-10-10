import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * LOCAL
 */
import { AppComponent } from './app.component';
import { ItemsItemModule } from './shared/features/items/item/items-item.module';
import { DomainModule } from './shared/domain/domain.module';
@NgModule({
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    ItemsItemModule,
    DomainModule
  ]
})
export class AppModule {}
