import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LayoutService} from "../../layout/service/app.layout.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    form!: FormGroup;

    constructor(private fb: FormBuilder, private router: Router ,private layoutService: LayoutService) {
        this.initForm();
    }

    initForm() {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    login() {
        this.router.navigate(['/page']);
        console.log('Email:', this.form.controls['email'].value);
        console.log('Password:', this.form.controls['password'].value);
        // Add your authentication logic here
    }

    get filledInput(): boolean {
        return this.layoutService.config().inputStyle === 'filled';
    }
}
