import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CateringComponent } from './pages/catering/catering.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { MenuAdminComponent } from './pages/admin-section/menu-admin/menu-admin.component';
import { AdminSideNavComponent } from './admin-components/admin-side-nav/admin-side-nav.component';
import { AdminTopNavComponent } from './admin-components/admin-top-nav/admin-top-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule  } from '@angular/material/grid-list';
import { AddSoupsDialogContentComponent } from './admin-components/add-soups-dialog-content/add-soups-dialog-content.component';
import { LoadingComponent } from './loading/loading.component';
import { AddMainMealsDialogComponent } from './admin-components/add-main-meals-dialog/add-main-meals-dialog.component';
import { SoupsListComponent } from './pages/admin-section/soups-list/soups-list.component';
import { MainMealsListComponent } from './pages/admin-section/main-meals-list/main-meals-list.component';
import { UpdateSoupDialogComponent } from './admin-components/update-soup-dialog/update-soup-dialog.component';
import { NewSoupDialogComponent } from './admin-components/new-soup-dialog/new-soup-dialog.component';
import { NewMainMealDialogComponent } from './admin-components/new-main-meal-dialog/new-main-meal-dialog.component';
import { UpdateMainMealDialogComponent } from './admin-components/update-main-meal-dialog/update-main-meal-dialog.component';
import {AuthInterceptor} from './Service/auth.interceptor';
import {CookieService} from 'ngx-cookie-service';
import {AuthGuard} from './auth/auth.guard';
import {AuthService} from './Service/auth.service';
import { NewMenuComponent } from './pages/admin-section/new-menu/new-menu.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { AssignSoupsComponent } from './admin-components/assign-soups/assign-soups.component';
import { AssignMainMealsComponent } from './admin-components/assign-main-meals/assign-main-meals.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    CateringComponent,
    ContactFormComponent,
    MapComponent,
    LoginComponent,
    MenuAdminComponent,
    AdminSideNavComponent,
    AdminTopNavComponent,
      AddSoupsDialogContentComponent,
      LoadingComponent,
      AddMainMealsDialogComponent,
      SoupsListComponent,
      MainMealsListComponent,
      UpdateSoupDialogComponent,
      NewSoupDialogComponent,
      NewMainMealDialogComponent,
      UpdateMainMealDialogComponent,
      NewMenuComponent,
      AssignSoupsComponent,
      AssignMainMealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDialogModule,
    MatListModule,
    MatSelectModule,
    MatGridListModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, AuthService, AuthGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
