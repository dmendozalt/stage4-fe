import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setResidentialInfo } from 'src/app/core/store/actions/residential-info.action';
import {
  PersonState,
  ResidentialInfo,
} from 'src/app/core/store/models/person.model';
import { IDeactivateComponent } from 'src/app/interfaces/deactivate-component';

@Component({
  selector: 'app-residential-info',
  templateUrl: './residential-info.component.html',
  styleUrls: ['./residential-info.component.sass'],
})
export class ResidentialInfoComponent implements OnInit, IDeactivateComponent {
  residentialInfoForm!: FormGroup;
  residentalInfo!: ResidentialInfo;
  constructor(
    private fb: FormBuilder,
    private store: Store<PersonState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.select('residentialInfo').subscribe((result) => {
      this.residentalInfo = result;
    });
    this.residentialInfoForm = this.fb.group({
      address: [this.residentalInfo?.address, Validators.required],
      neighborhood: [this.residentalInfo?.neighborhood, Validators.required],
      department: [this.residentalInfo?.department, Validators.required],
      city: [this.residentalInfo?.city, Validators.required],
    });
  }

  saveResidentialInfo() {
    this.store.dispatch(
      setResidentialInfo(this.residentialInfoForm.getRawValue())
    );
    this.router.navigate(['resume']);
  }

  public canExit(): boolean {
    if (!this.residentialInfoForm.valid)
      alert('Debe diligenciar el formulario correctamente');
    return this.residentialInfoForm.valid;
  }
}
