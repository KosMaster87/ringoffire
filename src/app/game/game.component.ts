import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayerComponent } from '../player/player.component';
import { Game } from '../../models/game';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
// import { MatDialog } from '@angular/material/dialog';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { GameInfoComponent } from '../game-info/game-info.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    GameInfoComponent,
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string | undefined;
  playedCards: string[] | undefined;
  game: Game | undefined = inject(Game);

  constructor(public dialog: MatDialog) {
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

      // this.currentPlayer ++;
      // this.currentPlayer = this.currentPlayer % this.players.length;

      setTimeout(() => {
        if (this.currentCard) {
          this.game!.playedCards!.push(this.currentCard);
        }
        this.pickCardAnimation = false;
      }, 1200);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      console.log('Soll der Name sein! ' + name);

      if (name && name.length > 0) {
        this.game!.players.push(name);
      }
    });
  }
}
