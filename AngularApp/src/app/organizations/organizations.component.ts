import { Component} from '@angular/core';
import { Organization } from '../shared/organization.model';
import { OrganizationService } from '../shared/organizaton.service';



@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent {

  selectedOrganization: Organization;
  refresh: boolean;
  constructor(public service: OrganizationService) { }

  onChanged(organization: Organization) {
    this.selectedOrganization = organization;
  }

  refreshList(makerefresh: boolean) {
    this.refresh = !this.refresh;
  }
}


