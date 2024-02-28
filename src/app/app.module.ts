import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeListService } from './employee-list.service';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { ContactComponent } from './contact/contact.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [			
    AppComponent,
      TestComponent,
      EmployeeListComponent,
      PageNotFoundComponent,
      EmployeeOverviewComponent,
      ContactComponent,
      TabsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
