import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string | undefined;
  playedCards: string[] | undefined;
  // game: Game | undefined;
  game: Game | undefined = inject(Game);

  // constructor(public game: Game) {
  constructor() {
    // this.newGame();
    console.log(this.game!.players);
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  calcPositionDieErstenVier(i: number) {
    return -i * 12 + 48 + 'px';
  }

  /**
   * "Definite Assignment Assertion" bezeichnet. Es weist den Compiler an, dass
   * die Variable oder das Property definitiv einen Wert haben wird, auch wenn es
   * zur Compile-Zeit nicht offensichtlich ist.
   */
  takeCard() {
    // if (!this.pickCardAnimation && this.game!.players.length > 0) {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game!.stack.pop();
      this.pickCardAnimation = true;

      console.log(this.game);
      console.log('New card: ' + this.currentCard);

      setTimeout(() => {
        if (this.currentCard) {
          this.game!.playedCards!.push(this.currentCard);
        }
        this.pickCardAnimation = false;
      }, 1200);
    }
  }
}
