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
  // game: Game | undefined = inject(Game);

  // @Input() name: string = '';
  // @Input() playerActive: boolean = false;

  constructor(public game: Game) {}
  //   {
  //     key1: 'Value 1-1',
  //     key2: 'Value 1-2',
  //     subItems: [
  //       {
  //         key1: 'SubValue 1-1',
  //         key2: 'SubValue 1-2',
  //       },
  //       {
  //         key1: 'SubValue 1-3',
  //         key2: 'SubValue 1-4',
  //       },
  //     ],
  //   },
  //   {
  //     key1: 'Value 2-1',
  //     key2: 'Value 2-2',
  //     subItems: [
  //       {
  //         key1: 'SubValue 2-1',
  //         key2: 'SubValue 2-2',
  //       },
  //       {
  //         key1: 'SubValue 2-3',
  //         key2: 'SubValue 2-4',
  //       },
  //     ],
  //   },
  //   {
  //     key1: 'Value 3-1',
  //     key2: 'Value 3-2',
  //     subItems: [
  //       {
  //         key1: 'SubValue 3-1',
  //         key2: 'SubValue 3-2',
  //       },
  //       {
  //         key1: 'SubValue 3-3',
  //         key2: 'SubValue 3-4',
  //       },
  //     ],
  //   },
  // ];
}
