import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PCalculaterRoutingModule } from './p-calculater-routing.module';
import {AddComponent} from "./add/add.component";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {ReactiveFormsModule} from "@angular/forms";
import {SelectButtonModule} from "primeng/selectbutton";

@NgModule({
  declarations: [
      AddComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
                {path: '', redirectTo: 'add', pathMatch: 'full'},
                {path: 'add', component: AddComponent, data: {breadcrumb: 'add'}},
            ]
        ),
        PCalculaterRoutingModule,
        ButtonModule,
        CalendarModule,
        DropdownModule,
        InputNumberModule,
        InputTextModule,
        InputTextareaModule,
        OverlayPanelModule,
        ReactiveFormsModule,
        SelectButtonModule,
    ]
})
export class PCalculaterModule { }
