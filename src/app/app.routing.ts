import { Routes,RouterModule } from "@angular/router";

import { SiteLayoutComponent } from "./_layout/site-layout/site-layout.component";
import { IndexComponent } from "./index/index.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { PricingComponent } from "./pricing/pricing.component";

const appRoutes : Routes = [
    {
        path : '',
        component : SiteLayoutComponent,
        children : [
            {path : '', component : IndexComponent, pathMatch : 'full'},
            {path : 'info/:name', component : AboutComponent},
            {path : 'contact', component : ContactComponent},
            {path : 'pricing', component : PricingComponent},
            {path : '**', redirectTo : ''}
        ]
    }
    
];

export const routing = RouterModule.forRoot(appRoutes);



