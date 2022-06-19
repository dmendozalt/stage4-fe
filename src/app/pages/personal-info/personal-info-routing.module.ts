import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoGuard } from 'src/app/core/guards/personal-info/personal-info.guard';
import { PersonalInfoComponent } from './personal-info.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalInfoComponent,
    canDeactivate: [PersonalInfoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalInfoRoutingModule {}
