import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Inline Template</h2>
    <app-other></app-other>
    <app-another></app-another>
  `,
  styles: [`
    h2 {
      color: red;
    }
  `]
})
export class AppComponent {
  title = 'course-angular2plus-i';
}
