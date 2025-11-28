import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
    pageName = 'Calculator';
    display: string = '';

    press(num: string) {
        // Prevent multiple decimal points
        if (num === '.' && this.display.includes('.')) {
            return;
        }
        // Handle initial zero display
        if (this.display === '' && num === '0') {
            this.display = '0';
        } else if (this.display === '0' && num !== '.') {
            this.display = num;
        } else {
            this.display += num;
        }
    }

    clear() {
        this.display = ''; // AC button clears everything
    }

    // Handles backspace/delete (X symbol)
    deleteLast() {
        this.display = this.display.slice(0, -1);
        if (this.display === '') {
            this.display = ''; // Revert to empty string to show '0' in template
        }
    }

    // Toggles the sign (+/- button)
    toggleSign() {
        // Only works if display is a number and not empty
        const num = parseFloat(this.display);
        if (!isNaN(num) && this.display !== '') {
            this.display = (-num).toString();
        }
    }

    // Handles percentage (%) button
    calculatePercentage() {
        try {
            // Evaluate the current expression, then divide by 100
            const result = eval(this.display);
            this.display = (result / 100).toString();
        } catch {
            this.display = 'Error';
        }
    }

    calculate() {
        try {
            this.display = 'I Love You!';
            // this.display = eval(this.display);
        } catch {
            this.display = 'Error';
        }
    }
}
