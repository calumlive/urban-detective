import { Component, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { GameState } from '../../services/game-state';
import { Header } from '../../components/header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deployment-zone',
  imports: [Header, CommonModule],
  templateUrl: './deployment-zone.html',
  styleUrl: './deployment-zone.css',
})
export class DeploymentZone {
  private router = inject(Router);
  private gameState = inject(GameState);

  currentStop = computed(() => this.gameState.activeClueIndex() + 1);
  totalStops = computed(() => this.gameState.clues().length);
  progressPercent = computed(() => (this.currentStop() / this.totalStops()) * 100);

  atLocation() {
    this.router.navigate(['/clue']);
  }
}
