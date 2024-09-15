import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { Game } from '../../models/game';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, GameComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  constructor(public game: Game) {}
}
