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
import { HttpClientModule } from '@angular/common/http';
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
import { AddMealDialogContentComponent } from './admin-components/add-meal-dialog-content/add-meal-dialog-content.component';

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
      AddMealDialogContentComponent
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
