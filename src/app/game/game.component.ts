import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  pickCardAnimation = false;
  game: any;

  constructor() {
    // this.game = Game
    this.newGame();
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    console.log('Linke Maustaste wurde geklickt.');
    this.pickCardAnimation = true;
  }

  calcPositionDieErstenVier(i: number) {
    return -i * 16 + 65 + 'px';
  }
}
