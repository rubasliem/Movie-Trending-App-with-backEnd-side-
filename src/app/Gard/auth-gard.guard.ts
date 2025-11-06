import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGardGuard: CanActivateFn = (route, state) => {
  const _AuthService = inject(AuthService);
  const _Router = inject(Router);

  if (_AuthService.userData.getValue() != null) {
    return true;
  } else {
    _Router.navigate(['/login']);
    return false;
  }
};
