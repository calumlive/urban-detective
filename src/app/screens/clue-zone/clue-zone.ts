import { Component, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { GameState } from '../../services/game-state';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-clue-zone',
  imports: [Header],
  templateUrl: './clue-zone.html',
  styleUrl: './clue-zone.css',
})
export class ClueZone {
  private router = inject(Router);
  private gameState = inject(GameState);

  clue = computed(() => this.gameState.activeClue());

  showToast: boolean = false;

  get hintContent() {
    return this.clue()?.hint || 'No hint available.';
  }

  showHint() {
    this.showToast = true;
  }

  closeToast() {
    this.showToast = false;
  }

  verifyClue() {
    this.closeToast();
    // Move to suspect elimination without pre-eliminating anyone
    this.router.navigate(['/elimination']);
  }
}
