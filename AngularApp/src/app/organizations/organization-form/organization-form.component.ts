import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Organization } from 'src/app/shared/organization.model';
import { OrganizationService } from '../../shared/organizaton.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.css']
})
export class OrganizationFormComponent implements OnInit {


  public organizationForm: FormGroup;
  public list: Organization[] = [];
  public label: string = "Add"
  

  constructor(public service: OrganizationService) {
  }
  @Input() set organizationData(organization: Organization) {
    this.organizationForm.patchValue({
      "organizationId": organization.organizationId,
      "organizationName": organization.organizationName,
      "location": organization.location,
      "numberOfStuff": organization.numberOfStuff,
      "contactNumber": organization.contactNumber
    })
    this.label = "Edit"
  }

  @Output() refresh = new EventEmitter()
  @Output() refreshList = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.organizationForm = new FormGroup({

      "organizationId": new FormControl("0"),

      "organizationName": new FormControl("", [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]),

      "location": new FormControl("", [Validators.required,
      Validators.minLength(4),
      Validators.maxLength(50),]),

      "numberOfStuff": new FormControl("", [Validators.required,
      Validators.min(5),
      Validators.max(5000000)]),

      "contactNumber": new FormControl("", [Validators.required,
      Validators.minLength(10),
      Validators.maxLength(12)])
    })

  }
  onSubmit() {
    console.log(this.organizationForm.controls["organizationId"].value)
    if (this.organizationForm.controls["organizationId"].value === null || this.organizationForm.controls["organizationId"].value === "0"  ) {
      this.insert()
    }
    else {
      this.update()
    }
  }

  insert() {
    this.service.addOrganization(this.organizationForm.value).subscribe(
      res => {
        this.resetForm();
        alert("Succeess");
        this.refreshList.emit(true);

      },
      err => {
        console.log(err);
      }
    );
  }

  update() {
    this.service.editOrganization(this.organizationForm.value).subscribe(
      res => {
        this.resetForm();
        alert("Update. Your form has been changed ");
        this.refreshList.emit(true);
        this.label = "Add"
      },
      err => {
        console.log(err);
      }
    );
  }

  resetForm() {
    this.organizationForm.reset();
    this.organizationForm.patchValue({
      "organizationId": "0"
    })
  }
  
}

