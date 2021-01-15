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


const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'catering', component: CateringComponent},
  {path: 'sign-in', component: LoginComponent},
  {path: 'admin/menu', component: MenuAdminComponent},
  {path: 'admin/soups', component: SoupsListComponent},
  {path: 'admin/main-meals', component: MainMealsListComponent},
  {path: '', redirectTo: '/menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
