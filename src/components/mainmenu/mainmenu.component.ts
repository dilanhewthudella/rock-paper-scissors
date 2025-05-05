import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.scss',
})
export class MainmenuComponent {
  constructor(private router: Router) {}

  goToCreateRoom(): void {
    this.router.navigate(['/createroom']); // Navigate to the 'createroom' page
  }
}
