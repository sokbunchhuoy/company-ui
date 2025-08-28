import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {EmployeeService} from "../../../../../service/employee.service";
import {Location} from '@angular/common';
import {Employee} from "../employee.model";

type OnlineOption = { value: boolean; label: string };
import {filter, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-add-edit',
    templateUrl: './add-edit.component.html',
    styleUrl: './add-edit.component.scss',
    providers: [MessageService]
})
export class AddEditComponent implements OnInit {
    objPosition: any[] = [];
    hide = false;
    onlineStatusOptions: OnlineOption[] = [
        {value: true, label: 'Online'},
        {value: false, label: 'Offline'}
    ];
    form!: FormGroup;
    isLoading = false;
    pageName = 'Employee';

    // image handling
    photoPreviewUrl: string | null = null; // "data:image/...;base64,...." (for <img>)
    fileError: string | null = null;
    private photoRawBase64: string | null = null; // the raw base64 (without the data: prefix)
    private photoMimeType: string | null = null;
    private photoFileName: string | null = null;

    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private location: Location,
        private service: EmployeeService,
        private router: Router,
        private messageService: MessageService
    ) {
        this.getPosition();
    }

    getPosition() {
        this.service.getPosition().subscribe((res: any) => {
            this.objPosition = res;
        })
    }

    ngOnInit() {
        this.initForm();

        this.route.paramMap
            .pipe(
                // only proceed when 'id' key exists (edit mode)
                filter(pm => pm.has('id')),
                switchMap(pm => {
                    const id = pm.get('id')!;
                    this.isLoading = true;
                    return this.service.getById(id);
                })
            )
            .subscribe({
                next: (emp) => {
                    this.form.patchValue({
                        id: emp.id,
                        name: emp.name,
                        position: emp.position,
                        department: emp.department,
                        salary: emp.salary,
                        hireDate: emp.hireDate ? new Date(emp.hireDate) : null,
                        description: emp.description ?? null,
                        onlineStatus: emp.onlineStatus ?? true
                    });

                    if (emp.photoBase64 && emp.photoMimeType) {
                        this.photoRawBase64 = emp.photoBase64;
                        this.photoMimeType = emp.photoMimeType;
                        this.photoFileName = emp.photoFileName ?? 'photo';
                        this.photoPreviewUrl = `data:${this.photoMimeType};base64,${emp.photoBase64}`;
                    }
                    this.isLoading = false;
                },
                error: () => {
                    this.isLoading = false;
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Failed to load employee.'
                    });
                }
            });
    }

    initForm() {
        this.form = this.fb.group({
            id: [null],
            name: [null, Validators.required],
            position: [null, Validators.required],
            department: [null, Validators.required],
            salary: [null, [Validators.required, Validators.min(0)]],
            hireDate: [null, Validators.required], // Date object from p-calendar
            description: [null],
            onlineStatus: [true]
        });
    }

    // private loadForEdit(id: string) {
    //     this.isLoading = true;
    //     this.service.getById(id).subscribe({
    //         next: (emp) => {
    //             this.form.patchValue({
    //                 id: emp.id,
    //                 name: emp.name,
    //                 position: emp.position,
    //                 department: emp.department,
    //                 salary: emp.salary,
    //                 hireDate: emp.hireDate ? new Date(emp.hireDate) : null,
    //                 description: emp.description ?? null,
    //                 onlineStatus: emp.onlineStatus ?? true
    //             });
    //
    //             // if API returns existing photo (base64), show preview
    //             if (emp.photoBase64 && emp.photoMimeType) {
    //                 this.photoRawBase64 = emp.photoBase64;
    //                 this.photoMimeType = emp.photoMimeType;
    //                 this.photoFileName = emp.photoFileName ?? 'photo';
    //                 this.photoPreviewUrl = `data:${this.photoMimeType};base64,${emp.photoBase64}`;
    //             }
    //             this.isLoading = false;
    //         },
    //         error: (err) => {
    //             this.isLoading = false;
    //             this.messageService.add({
    //                 severity: 'error',
    //                 summary: 'Error',
    //                 detail: 'Failed to load employee.'
    //             });
    //         }
    //     });
    // }

    async onFilePicked(event: Event) {
        this.fileError = null;
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;

        // basic validations: size & type
        const maxBytes = 2 * 1024 * 1024; // 2MB
        if (file.size > maxBytes) {
            this.fileError = 'Image is too large (max 2 MB).';
            input.value = '';
            return;
        }
        if (!file.type.startsWith('image/')) {
            this.fileError = 'Please select a valid image file.';
            input.value = '';
            return;
        }

        try {
            const {rawBase64, dataUrl} = await this.readFileAsBase64(file);
            this.photoRawBase64 = rawBase64;
            this.photoMimeType = file.type;
            this.photoFileName = file.name;
            this.photoPreviewUrl = dataUrl; // for preview
        } catch {
            this.fileError = 'Could not read file.';
        }
    }

    clearPhoto() {
        this.photoRawBase64 = null;
        this.photoMimeType = null;
        this.photoFileName = null;
        this.photoPreviewUrl = null;
    }

    private readFileAsBase64(file: File): Promise<{ rawBase64: string; dataUrl: string }> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const dataUrl = reader.result as string; // "data:image/png;base64,AAAA..."
                const rawBase64 = dataUrl.split(',')[1] ?? '';
                resolve({rawBase64, dataUrl});
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    private toYMD(date: Date): string {
        // yyyy-MM-dd
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    onSubmit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        const v = this.form.value;

        const employee: Employee = {
            id: v.id ?? undefined,
            name: v.name!,
            position: v.position!,
            department: v.department!,
            salary: Number(v.salary),
            hireDate: this.toYMD(new Date(v.hireDate as Date)), // "YYYY-MM-DD"
            description: v.description ?? null,
            onlineStatus: !!v.onlineStatus,
            photoBase64: this.photoRawBase64 ?? undefined,
            photoMimeType: this.photoMimeType ?? undefined,
            photoFileName: this.photoFileName ?? undefined
        };

        this.isLoading = true;

        const req$ = employee.id
            ? this.service.update(String(employee.id), employee) // PUT /employee/:id
            : this.service.create(employee);                     // POST /employee

        req$.subscribe({
            next: () => {
                this.isLoading = false;
                this.messageService.add({
                    key: 'tst',
                    severity: 'success',
                    summary: 'Saved',
                    detail: `Employee ${employee.id ? 'updated' : 'created'} successfully.`
                });
                this.router.navigate(['/page/company/employee/list']);
            },
            error: (err) => {
                this.isLoading = false;
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: err?.message ?? 'Save failed.'
                });
            }
        });
    }

    goBack() {
        this.isLoading = true;
        this.location.back();
        this.isLoading = false;
    }
}
