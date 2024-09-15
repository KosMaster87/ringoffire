import { Component, Injectable } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss',
})
export class GameInfoComponent {}
