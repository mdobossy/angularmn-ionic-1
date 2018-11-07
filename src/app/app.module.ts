import { AddMemoryPage } from './pages/add-memory/add-memory.page';
import { AddMemoryPageModule } from './pages/add-memory/add-memory.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    AddMemoryPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AddMemoryPageModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
