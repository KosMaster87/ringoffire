import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, GameComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  // game: any;
  // @Input() name: string = '';
  // @Input() playerActive: boolean = false;
}
