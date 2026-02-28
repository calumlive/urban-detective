import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameState } from '../../services/game-state';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-mission-overview',
  imports: [RouterLink, Header],
  templateUrl: './mission-overview.html',
  styleUrl: './mission-overview.css',
})
export class MissionOverview {
  private gameState = inject(GameState);

  get suspectList() {
    return this.gameState.suspects();
  }

  missionTitle = computed(() => {
    const id = this.gameState.selectedMissionId();
    const sum = this.gameState.allMissionSummaries.find(m => m.id === id);
    return sum?.title || 'Unknown Mission';
  });

  missionLocation = computed(() => {
    const id = this.gameState.selectedMissionId();
    const sum = this.gameState.allMissionSummaries.find(m => m.id === id);
    return sum?.location || 'Unknown Location';
  });
}
