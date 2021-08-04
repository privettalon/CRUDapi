import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Organization } from 'src/app/shared/organization.model';
import { OrganizationService } from '../../shared/organizaton.service';

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.css']
})
export class OrganizationFormComponent implements OnInit {

  constructor(public service: OrganizationService,) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(this.service.formData.organizationId == 0)
    {
      this.insert(form)
    }
    else{
      this.update(form)
    }
  }

  insert(form:NgForm){
    this.service.postRequest().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshOrganizationList();
        alert("Succeess");
      },
      err=>{
        console.log(err);
      }
    );
  }

  update(form:NgForm){
    this.service.putRequest().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshOrganizationList();
        alert("Update. Your form has been changed ");
      },
      err=>{
        console.log(err);
      }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Organization();
  }
}
