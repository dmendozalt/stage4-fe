import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setPersonalInfo } from 'src/app/core/store/actions/personal-info.action';
import {
  PersonalInfo,
  PersonState,
} from 'src/app/core/store/models/person.model';
import { IDeactivateComponent } from 'src/app/interfaces/deactivate-component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.sass'],
})
export class PersonalInfoComponent implements OnInit, IDeactivateComponent {
  personalInfoForm!: FormGroup;
  personalInfo!: PersonalInfo;
  constructor(
    private fb: FormBuilder,
    private store: Store<PersonState>,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.store.select('personalInfo').subscribe((result) => {
      this.personalInfo = result;
    });
    this.personalInfoForm = this.fb.group({
      name: [this.personalInfo?.name, Validators.required],
      lastName: [this.personalInfo?.lastName, Validators.required],
      age: [this.personalInfo?.age, Validators.required],
      email: [this.personalInfo?.email, Validators.required],
      phone: [this.personalInfo?.phone, Validators.required],
    });
  }

  savePersonalInfo() {
    this.store.dispatch(setPersonalInfo(this.personalInfoForm.getRawValue()));
    this.router.navigate(['residential-info']);
  }

  public canExit(): boolean {
    if (!this.personalInfoForm.valid)
      alert('Debe diligenciar todos los campos');
    return this.personalInfoForm.valid;
  }
}
