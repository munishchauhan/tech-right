import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { RegisterVolunteerComponent } from './volunteers/register-volunteer/register-volunteer.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { EnvironmentUrlService } from './_services/environment-url.service';
import { RepositoryService } from './_services/repository.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterVolunteerComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }), // ToastrModule added
  ],
  providers: [
    EnvironmentUrlService,
    RepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
