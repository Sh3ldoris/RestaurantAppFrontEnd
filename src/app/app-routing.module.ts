import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './pages/menu/menu.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';


const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
