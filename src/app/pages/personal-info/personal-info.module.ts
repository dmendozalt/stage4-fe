import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalInfoRoutingModule } from './personal-info-routing.module';
import { PersonalInfoComponent } from './personal-info.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonalInfoComponent],
  imports: [
    CommonModule,
    PersonalInfoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class PersonalInfoModule {}
