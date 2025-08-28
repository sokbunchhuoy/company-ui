import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingComponent} from "../../loading/loading.component";
import {ProgressBarModule} from "primeng/progressbar";


@NgModule({
    declarations: [LoadingComponent],
    imports: [
        CommonModule,
        ProgressBarModule
    ],
    exports: [LoadingComponent]
})
export class LoadingModule {
}
