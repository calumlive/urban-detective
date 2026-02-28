import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { GameState } from '../../services/game-state';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-suspect-elimination',
  imports: [Header],
  templateUrl: './suspect-elimination.html',
  styleUrl: './suspect-elimination.css',
})
export class SuspectElimination {
  private gameState = inject(GameState);
  private router = inject(Router);

  selectedSuspectId = signal<string | null>(null);

  get suspects() {
    return this.gameState.suspects();
  }

  selectSuspect(id: string) {
    const suspect = this.gameState.suspects().find(s => s.id === id);
    if (suspect?.isEliminated) return;

    if (this.selectedSuspectId() === id) {
      this.selectedSuspectId.set(null);
    } else {
      this.selectedSuspectId.set(id);
    }
  }

  confirmSelection() {
    const id = this.selectedSuspectId();
    if (id) {
      this.gameState.eliminateSuspect(id);
      this.gameState.nextClue();

      if (this.gameState.isGameComplete()) {
        this.router.navigate(['/reveal']);
      } else {
        this.router.navigate(['/deployment']);
      }
    }
  }
}
