import { Injectable } from '@angular/core';
import { Organization } from './organization.model';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import {PostModel} from './organization.post.model'

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) {
  }
  readonly serviceName = '/api/Organizations';

  addOrganization(data: PostModel) {
    return this.http.post(`${environment.baseURL}${this.serviceName}`, data);
  }

  editOrganization(data: Organization) {
    return this.http.put(`${environment.baseURL}${this.serviceName}/${data.organizationId}`, data);
  }

  getOrganizations() {
    return this.http.get<Organization[]>(`${environment.baseURL}${this.serviceName}`);
  }

  deleteOrganization(id: number) {
    return this.http.delete(`${environment.baseURL}${this.serviceName}/${id}`);
  }

}
