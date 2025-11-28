import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmployeeRoutingModule} from './employee-routing.module';
import {ListComponent} from "./list/list.component";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {LoadingModule} from "../../../../share/component/module/loading/loading.module";
import {TableModule} from "primeng/table";
import {RouterModule} from "@angular/router";
import {AddEditComponent} from "./add-edit/add-edit.component";
import {SelectButtonModule} from "primeng/selectbutton";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CalendarModule} from "primeng/calendar";
import {RippleModule} from "primeng/ripple";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {IndexComponent} from "./index/index.component";
import {ProgressBarModule} from "primeng/progressbar";
import {AvatarModule} from "primeng/avatar";
import {ChartModule} from "primeng/chart";
import {PickListModule} from "primeng/picklist";
import {DetailComponent} from "./detail/detail.component";
import {PanelModule} from "primeng/panel";
import {QrScanComponent} from "./qr-scan/qr-scan.component";

import {DialogModule} from "primeng/dialog";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import {OverlayPanelModule} from "primeng/overlaypanel";

@NgModule({
    declarations: [ListComponent, AddEditComponent, IndexComponent, DetailComponent, QrScanComponent],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        ToastModule,
        ButtonModule,
        ReactiveFormsModule,
        InputTextModule,
        LoadingModule,
        TableModule,
        RouterModule.forChild([
                {path: '', redirectTo: 'list', pathMatch: 'full'},
                {path: 'list', component: ListComponent, data: {breadcrumb: 'list'}},
                {path: 'add', component: AddEditComponent, data: {breadcrumb: 'add'}},
                {path: 'edit/:id', component: AddEditComponent, data: {breadcrumb: 'Edit'}},
                {path: 'crush', component: IndexComponent, data: {breadcrumb: 'Crush'}},
                {path: 'detail', component: DetailComponent, data: {breadcrumb: 'Detail'}},
                {path: 'qr', component: QrScanComponent, data: {breadcrumb: 'Detail'}},
            ]
        ),
        SelectButtonModule,
        DropdownModule,
        InputNumberModule,
        InputTextareaModule,
        CalendarModule,
        RippleModule,
        ConfirmDialogModule,
        ProgressBarModule,
        AvatarModule,
        ChartModule,
        PickListModule,
        PanelModule,
        ZXingScannerModule,
        DialogModule,
        DropdownModule,
        FormsModule,
        OverlayPanelModule,

    ],
    providers: [ConfirmationService, MessageService]
})
export class EmployeeModule {
}
