import { AuthGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';

import { ChatComponent } from '../chat/chat.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
    { path: '**', component: LoginComponent }
];

export const appRoutes = RouterModule.forRoot(routes);