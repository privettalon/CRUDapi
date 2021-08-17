import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Organization } from '../../shared/organization.model';
import { OrganizationService } from '../../shared/organizaton.service';


@Component({
  selector: 'app-organizations-list',
  templateUrl: './organizations-list.component.html',
  styleUrls: ['./organizations-list.component.css']
})
export class OrganizationsListComponent implements OnInit {

  pageSize = 7;
  pageEvent: PageEvent;
  pageSlice: any[];
  list: Organization[] = [];
  length: number;
  ref: boolean;
  startIndex: number = 0;
  endIndex: number = 7;

  constructor(public service: OrganizationService) { }

  @Output() onChanged = new EventEmitter<Organization>();
  @Input() set refreshList(refresh: boolean) {
    this.service.getOrganizations().subscribe(list => {
      this.list = list;
      this.pageSlice = this.list.slice(this.startIndex, this.endIndex);
      this.length = this.list.length;
    });
  }

  selectOrganization(selected: Organization) {
    this.onChanged.emit(selected);

  }

  ngOnInit(): void {
    this.service.getOrganizations().subscribe(list => {
      this.list = list;
      this.pageSlice = this.list.slice(0, 7);

    });
  }

  onDelete(id: number) {
    if (confirm("Are you sure you want to delete this organization? ")) {
      this.service.deleteOrganization(id).subscribe
        (
          res => {
            this.service.getOrganizations().subscribe(list => {
              this.list = list;
              this.pageSlice = this.list.slice(0, 7);
              this.length = this.list.length;
            });;
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  onPaginateChange(event: PageEvent) {
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + event.pageSize;

    if (this.endIndex > this.list.length) {
      this.endIndex = this.list.length
    }

    this.service.getOrganizations().subscribe(list => {
      this.list = list;
      this.pageSlice = this.list.slice(this.startIndex, this.endIndex)
    })
  }

}
