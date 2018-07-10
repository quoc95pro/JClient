import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { IndexComponent } from './index/index.component';
import { IdolsService } from "../app/index/index.service";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpModule } from '@angular/http';

import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteLayoutComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    routing,
    InfiniteScrollModule,
    HttpModule
  ],
  providers: [IdolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
