import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit {
    sourceCities: any[] = [];
    targetCities: any[] = [];
    messages: string[] = [];
    value: number = 0;
    constructor(private location: Location) {
    }

    ngOnInit(): void {
        let delay = 500;
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                this.messages.push(`${i + 1}. សារភាពស្នេហ៍តែអូនមិនស្រលាញ់ 😔`);
                this.value = ((i + 1) / 40) * 100;
            }, delay);
            delay += 300;
        }

        this.sourceCities = [
            { name: 'San Francisco', code: 'SF' },
            { name: 'London', code: 'LDN' },
            { name: 'Paris', code: 'PRS' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Berlin', code: 'BRL' },
            { name: 'Barcelona', code: 'BRC' },
            { name: 'Rome', code: 'RM' }];

        this.targetCities = [];
    }


    goBack() {
        this.location.back();
    }

}
