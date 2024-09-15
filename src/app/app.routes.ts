import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { ImprintComponentComponent } from './imprint-component/imprint-component.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';

export const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'imprint', component: ImprintComponentComponent },
  { path: 'game', component: GameComponent },
  // { path: 'player', component: PlayerComponent },
];
