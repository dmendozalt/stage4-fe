import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { PersonalInfoModule } from './pages/personal-info/personal-info.module';
import { ResidentialInfoModule } from './pages/residential-info/residential-info.module';
import { ResumeModule } from './pages/resume/resume.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './core/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [AppComponent],
  imports: [
    PersonalInfoModule,
    ResidentialInfoModule,
    ResumeModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
