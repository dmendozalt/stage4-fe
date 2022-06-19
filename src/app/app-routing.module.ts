import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'personal-info',
    loadChildren: () =>
      import('./pages/personal-info/personal-info.module').then(
        (m) => m.PersonalInfoModule
      ),
  },
  {
    path: 'residential-info',
    loadChildren: () =>
      import('./pages/residential-info/residential-info.module').then(
        (m) => m.ResidentialInfoModule
      ),
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./pages/resume/resume.module').then((m) => m.ResumeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
