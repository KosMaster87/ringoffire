import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Game {
  public players: string[] = ['Hanz', 'Peter', 'Kos', 'Boris'];
  public stack: string[] = [];
  public playedCards: string[] = [];
  public currentPlayer: number = 0;

  constructor() {
    for (let i = 1; i < 14; i++) {
      this.stack.push('spade_' + i);
      this.stack.push('hearts_' + i);
      this.stack.push('clubs_' + i);
      this.stack.push('diamonds_' + i);
    }
    this.stack = this.shuffle(this.stack);
    // this.shuffle(this.stack);
  }

  /**
   * Best by stackoverflow.
   * @param array
   * @returns
   */
  shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
