import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentialInfoRoutingModule } from './residential-info-routing.module';
import { ResidentialInfoComponent } from './residential-info.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResidentialInfoComponent],
  imports: [
    CommonModule,
    ResidentialInfoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class ResidentialInfoModule {}
