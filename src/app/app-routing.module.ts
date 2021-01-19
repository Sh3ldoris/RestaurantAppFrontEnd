import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './pages/menu/menu.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';
import {CateringComponent} from './pages/catering/catering.component';
import {LoginComponent} from './pages/login/login.component';
import {MenuAdminComponent} from './pages/admin-section/menu-admin/menu-admin.component';
import {SoupsListComponent} from './pages/admin-section/soups-list/soups-list.component';
import {MainMealsListComponent} from './pages/admin-section/main-meals-list/main-meals-list.component';
import {AuthGuard} from './auth/auth.guard';
import {AuthLoginhGuard} from './auth/auth-loginh.guard';
import {NewMenuComponent} from './pages/admin-section/new-menu/new-menu.component';


const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'catering', component: CateringComponent},
  {path: 'sign-in', component: LoginComponent},
  {path: 'admin/menu', component: MenuAdminComponent, canActivate: [AuthGuard]},
  {path: 'admin/soups', component: SoupsListComponent, canActivate: [AuthGuard]},
  {path: 'admin/main-meals', component: MainMealsListComponent, canActivate: [AuthGuard]},
  {path: 'admin/new-menu', component: NewMenuComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
