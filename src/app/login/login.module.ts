import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";
import {PasswordModule} from "primeng/password";
import {CardModule} from "primeng/card";
import {MessageModule} from "primeng/message";
import {AppConfigModule} from "../layout/config/config.module";
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        InputTextModule,
        FormsModule,
        ButtonModule,
        RouterModule.forChild([
            {path: '', component: LoginComponent},
        ]),
        ReactiveFormsModule,
        PasswordModule,
        CardModule,
        MessageModule,
        AppConfigModule,
        RippleModule
    ]
})
export class LoginModule { }
