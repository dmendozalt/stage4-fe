import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [ResumeComponent],
  imports: [CommonModule, ResumeRoutingModule, MaterialModule],
})
export class ResumeModule {}
