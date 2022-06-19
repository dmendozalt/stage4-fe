import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactivateComponent } from 'src/app/interfaces/deactivate-component';

@Injectable({
  providedIn: 'root',
})
export class PersonalInfoGuard implements CanDeactivate<IDeactivateComponent> {
  canDeactivate(
    component: IDeactivateComponent
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.canExit ? component.canExit() : true;
  }
}
