import { Router } from '@angular/router';
import { GuardService } from '../services/guard.service';
export const guardGuard = (component, currentRoute, currentState, nextState) => {
    const authGuardService = new GuardService(new Router());
    return authGuardService.canDeactivate();
};
