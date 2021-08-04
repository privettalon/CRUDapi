import { Injectable } from '@angular/core';
import { Organization } from './organization.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private hhtp:HttpClient) { }

  formData:Organization = new Organization();
  readonly ApiURL = 'http://localhost:13558/api/Organizations';
  list : Organization[];

  postRequest()
  {
    return this.hhtp.post(this.ApiURL,this.formData);
  }

  putRequest()
  {
    return this.hhtp.put(`${this.ApiURL}/${this.formData.organizationId}`,this.formData);
  }

  refreshOrganizationList(){
    this.hhtp.get(this.ApiURL).toPromise().then(res=>this.list = res as Organization[])
  }

  deleteRequest(id:number)
  {
    return this.hhtp.delete(`${this.ApiURL}/${id}`);
  }
  
  
}
