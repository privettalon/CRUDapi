
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { OrganizationFormComponent } from './organizations/organization-form/organization-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    OrganizationsComponent,
    OrganizationFormComponent
  ],
    imports: [
        BrowserModule,
        FormsModule, 
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
