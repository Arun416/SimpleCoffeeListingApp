import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from 'src/components/home/home.component';
import { CardComponent } from 'src/components/card/card.component';
import { MainPanelComponent } from 'src/components/main-panel/main-panel.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MainPanelComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TabsModule.forRoot(),
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
