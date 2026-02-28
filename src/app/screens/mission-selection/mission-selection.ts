import { Component, OnInit, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';
import { CommonModule } from '@angular/common';
import { GameState } from '../../services/game-state';

@Component({
  selector: 'app-mission-selection',
  standalone: true,
  imports: [Header, CommonModule],
  templateUrl: './mission-selection.html',
  styleUrl: './mission-selection.css',
})
export class MissionSelection implements OnInit {
  private gameState = inject(GameState);
  private router = inject(Router);

  missions = computed(() => this.gameState.allMissionSummaries);
  selectedMissionId = computed(() => this.gameState.selectedMissionId());

  ngOnInit() {
    this.gameState.loadLocations().then(() => {
      // If no mission is selected, select the first one by default
      if (!this.selectedMissionId() && this.missions().length > 0) {
        this.gameState.selectMission(this.missions()[0].id);
      }
    });
  }

  selectMission(id: string) {
    this.gameState.selectMission(id);
  }

  async startMission() {
    const id = this.selectedMissionId();
    if (id) {
      await this.gameState.loadMissionData(id);
      this.router.navigate(['/overview']);
    }
  }
}
