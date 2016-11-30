import { Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'button', component: ButtonComponent }
];
