import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  // imports: [GameComponent], // Will ich was von hier in der GameComponent benutzen? Unwarscheinlich.
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss',
})
export class StartScreenComponent {
  constructor(private router: Router) {}

  newGame() {
    this.router.navigateByUrl('/game'); // Navigiere zu GameComponent
  }

  // /**
  //  * Alternative vom Rauting: was flexibler ist, wenn du Parameter an die Route übergeben möchtest.
  //  * Lese mehr in Obsidian.
  //  */
  // newGame() {
  //   this.router.navigate(['/game']);
  // }
}
