import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { RingOfFireService } from './ring-of-fire.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    GameComponent,
    PlayerComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Ring of fire';

  //  constructor(private ringOfFireService: RingOfFireService) {
  //     console.log('Service initialized:', this.ringOfFireService);
  //  }
}
