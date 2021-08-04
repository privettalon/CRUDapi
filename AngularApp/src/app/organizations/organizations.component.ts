import { Component, OnInit } from '@angular/core';
import { Organization } from '../shared/organization.model';
import { OrganizationService } from '../shared/organizaton.service';



@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  constructor(public service: OrganizationService) { }

  ngOnInit(): void {
    this.service.refreshOrganizationList();
  }

  takeorganization(selected: Organization){
    this.service.formData =  Object.assign({}, selected);
  }

  onDelete(id:number){
    if(confirm("Are you sure you want to delete this organization? "))
    {
      this.service.deleteRequest(id).subscribe
      (
      res=>{
        this.service.refreshOrganizationList();
      },
      err =>{
        console.log(err);
      }
      );
    }
  }
}
