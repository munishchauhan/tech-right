import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule
    ],
    exports: [],
    providers: []
})
export class AuthenticationModule {

}