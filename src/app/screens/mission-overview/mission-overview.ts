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

  missionTitle = computed(() => {
    const id = this.gameState.selectedMissionId();
    const sum = this.gameState.allMissionSummaries.find(m => m.id === id);
    return sum?.title || 'Unknown Mission';
  });

  missionDescription = computed(() => {
    const id = this.gameState.selectedMissionId();
    const sum = this.gameState.allMissionSummaries.find(m => m.id === id);
    return sum?.description || 'No description available.';
  });

  missionParagraphs = computed(() => {
    return this.missionDescription().split(/\n\s*\n/);
  });

  missionImage = computed(() => {
    const id = this.gameState.selectedMissionId();
    const sum = this.gameState.allMissionSummaries.find(m => m.id === id);
    return sum?.imageUrl || '';
  });

  missionLocation = computed(() => {
    const id = this.gameState.selectedMissionId();
    const sum = this.gameState.allMissionSummaries.find(m => m.id === id);
    return sum?.location || 'Unknown Location';
  });
}
