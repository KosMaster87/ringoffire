import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';

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
  game: Game | undefined;

  constructor() {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  calcPositionDieErstenVier(i: number) {
    return -i * 16 + 65 + 'px';
  }

  /**
   * "Definite Assignment Assertion" bezeichnet. Es weist den Compiler an, dass
   * die Variable oder das Property definitiv einen Wert haben wird, auch wenn es
   * zur Compile-Zeit nicht offensichtlich ist.
   */
  takeCard() {
    if (!this.pickCardAnimation && this.game!.players.length > 0) {
      this.currentCard = this.game?.stack.pop() || '';
      this.pickCardAnimation = true;

      console.log(this.game);
      console.log('New card: ' + this.currentCard);

      setTimeout(() => {
        this.currentCard = this.game?.stack.pop() || '';
        this.pickCardAnimation = false;
      }, 1200);
    }
  }
}
