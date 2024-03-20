import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor() {
    this.test();
  }

  title = 'Döner Ömer 🧅';

  test(){
    if (1 == 1) {
      this.tilte = 'Döner Ömer 🧅'
    }
  }
  // t est auiwdgkagdk gakwdjhg b
  // eslint Befehl: npx eslint . --format=json --output-file=eslingReport.json
  //sed -i 's,/Users/leonfranken/Documents/angular-test-project/src/app/,./app/,g' eslingReport.json
}


