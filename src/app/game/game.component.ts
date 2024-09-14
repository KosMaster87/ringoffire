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
  currentCard: string = '';
  game: any;

  constructor() {
    this.newGame();
  }

  // ngOnInit(): void {
  //   this.newGame();
  // }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  calcPositionDieErstenVier(i: number) {
    return -i * 16 + 65 + 'px';
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop(); // benutze ich als ein zwischenspeicher.
      this.pickCardAnimation = true;

      console.log(this.game);
      console.log('New card: ' + this.currentCard);
      // console.log('Game is: ' + this.game);

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1200);
    }
  }
}
