import { Component } from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

    constructor(private location: Location, private router: Router) {
    }


    goBack() {
        this.location.back();
    }
}
