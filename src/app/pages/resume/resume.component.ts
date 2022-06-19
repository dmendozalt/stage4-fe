import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  PersonalInfo,
  PersonState,
  ResidentialInfo,
} from 'src/app/core/store/models/person.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass'],
})
export class ResumeComponent implements OnInit {
  personalInfo!: PersonalInfo;
  residentialInfo!: ResidentialInfo;

  constructor(private store: Store<PersonState>, private router: Router) {}

  ngOnInit(): void {
    this.store.select('personalInfo').subscribe((result) => {
      this.personalInfo = result;
    });

    this.store.select('residentialInfo').subscribe((result) => {
      this.residentialInfo = result;
    });
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
