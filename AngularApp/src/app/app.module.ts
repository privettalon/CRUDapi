
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ReactiveFormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { OrganizationFormComponent } from './organizations/organization-form/organization-form.component';
import { HttpClientModule } from '@angular/common/http';
import { OrganizationsListComponent } from './organizations/organizations-list/organizations-list.component';


@NgModule({
  declarations: [
    AppComponent,
    OrganizationsComponent,
    OrganizationFormComponent,
    OrganizationsListComponent
  ],
    imports: [
        BrowserModule,
        FormsModule, 
        HttpClientModule,
        MatPaginatorModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

