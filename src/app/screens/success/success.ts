import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameState } from '../../services/game-state';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-success',
  imports: [RouterLink, Header],
  templateUrl: './success.html',
  styleUrl: './success.css',
})
export class Success {
  private gameState = inject(GameState);

  culprit = computed(() => {
    const culpritId = this.gameState.culpritId();
    if (culpritId) {
      return this.gameState.suspects().find(s => s.id === culpritId);
    }
    return this.gameState.suspects().find(s => !s.isEliminated);
  });

  resetGame() {
    this.gameState.resetGame();
  }
}
