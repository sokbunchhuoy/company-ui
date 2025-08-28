import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeService} from "../../../../../service/employee.service";
import {Employee} from "../employee.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
    providers: [ConfirmationService]
})
export class ListComponent {
    employees : Employee[] =  [];
    isLoading!: boolean;
    pageName = "Employee";
    f!: FormGroup;
    constructor(
        public fb: FormBuilder,
        public service: EmployeeService,
        private confirm: ConfirmationService,
        private messageService: MessageService
    ) {
        this.initForm();
        this.getEmployee();
    }
    initForm() {
        this.f = this.fb.group({
            name: [null]
        })
    }

    getEmployee() {
        this.isLoading = true;
        setTimeout(() => {
            this.service.list().subscribe((res: any) => {
                this.employees  = res;
                this.isLoading = false;
            })
        }, 100)
    }

    // ====== NEW: Delete with confirmation ======
    deleteEmployee(emp: Employee) {
        this.confirm.confirm({
            message: `Delete ${emp.name}?`,
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Yes',
            rejectLabel: 'No',
            accept: () => {
                this.isLoading = true;

                // optimistic UI (optional): remove locally first
                const prev = [...this.employees];
                this.employees = this.employees.filter(e => e.id !== emp.id);

                this.service.delete(String(emp.id)).subscribe({
                    next: () => {
                        this.isLoading = false;
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Deleted',
                            detail: 'Employee removed.'
                        });
                    },
                    error: () => {
                        // rollback if delete fails
                        this.employees = prev;
                        this.isLoading = false;
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'Failed to delete employee.'
                        });
                    }
                });
            }
        });
    }

    refresh() {
        this.getEmployee();
    }

}
