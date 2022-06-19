import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactivateComponent } from 'src/app/interfaces/deactivate-component';

@Injectable({
  providedIn: 'root',
})
export class ResidentialInfoGuard
  implements CanDeactivate<IDeactivateComponent>
{
  canDeactivate(
    component: IDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.canExit ? component.canExit() : true;
  }
}
