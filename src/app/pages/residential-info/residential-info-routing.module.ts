import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentialInfoGuard } from 'src/app/core/guards/residential-info/residential-info.guard';
import { ResidentialInfoComponent } from './residential-info.component';

const routes: Routes = [
  {
    path: '',
    component: ResidentialInfoComponent,
    canDeactivate: [ResidentialInfoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentialInfoRoutingModule {}
