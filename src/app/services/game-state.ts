import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface MissionSummary {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  location: string;
  time: string;
  difficulty: string;
  status: string;
  imageUrl: string;
}

export interface LocationData {
  id: string;
  name: string;
  missions: MissionSummary[];
}

export interface Suspect {
  id: string;
  name: string;
  avatar: string;
  isEliminated: boolean;
  eliminationReason?: string;
}

export interface Clue {
  id: string;
  title: string;
  prompt: string;
  hint: string;
  eliminates: string;
  eliminationReason: string;
  startLocation?: string;
  instructions?: string[];
}

export interface MissionDetail {
  id: string;
  culpritId: string;
  suspects: Suspect[];
  clues: Clue[];
}

@Injectable({
  providedIn: 'root',
})
export class GameState {
  private http = inject(HttpClient);

  private _locations = signal<LocationData[]>([]);
  public locations = computed(() => this._locations());

  private _selectedMissionId = signal<string | null>(null);
  public selectedMissionId = computed(() => this._selectedMissionId());

  // Extracted dynamically from locations JSON when needed
  public get allMissionSummaries(): MissionSummary[] {
    return this._locations().flatMap(loc => loc.missions);
  }

  private _suspects = signal<Suspect[]>([]);
  public suspects = computed(() => this._suspects());
  public remainingSuspects = computed(() => this._suspects().filter(s => !s.isEliminated));
  public eliminatedSuspectsCount = computed(() => this._suspects().filter(s => s.isEliminated).length);

  private _clues = signal<Clue[]>([]);
  public clues = computed(() => this._clues());

  private _activeClueIndex = signal<number>(0);
  public activeClueIndex = computed(() => this._activeClueIndex());
  public activeClue = computed(() => this._clues()[this._activeClueIndex()] || null);

  private _culpritId = signal<string | null>(null);
  public culpritId = computed(() => this._culpritId());

  public async loadLocations() {
    try {
      const data = await firstValueFrom(this.http.get<LocationData[]>('data/locations.json'));
      this._locations.set(data);
    } catch (err) {
      console.error('Failed to load locations', err);
    }
  }

  public selectMission(id: string) {
    this._selectedMissionId.set(id);
  }

  public async loadMissionData(missionId: string) {
    try {
      const data = await firstValueFrom(this.http.get<MissionDetail[]>('data/missions.json'));
      const mission = data.find(m => m.id === missionId);
      if (mission) {
        this._suspects.set(mission.suspects.map(s => ({ ...s, isEliminated: false })));
        this._clues.set(mission.clues);
        this._culpritId.set(mission.culpritId);
        this._activeClueIndex.set(0);
      } else {
        console.error('Mission not found in details JSON.');
      }
    } catch (err) {
      console.error('Failed to load mission details', err);
    }
  }

  public eliminateSuspect(id: string) {
    const currentClue = this.activeClue();
    let reason = 'ELIMINATED';
    if (currentClue && currentClue.eliminates === id) {
      reason = currentClue.eliminationReason;
    }

    this._suspects.update(suspects =>
      suspects.map(s => s.id === id ? { ...s, isEliminated: true, eliminationReason: reason } : s)
    );
  }

  public nextClue() {
    this._activeClueIndex.update(idx => idx + 1);
  }

  public isGameComplete(): boolean {
    // Game is complete when there is only 1 suspect remaining or all clues have been used.
    // The requirement states: "finish on the final reveal screen when all clues and suspects have been eliminated."
    return this.remainingSuspects().length <= 1 || this._activeClueIndex() >= this._clues().length;
  }

  public resetGame() {
    this._suspects.update(suspects =>
      suspects.map(s => ({ ...s, isEliminated: false, eliminationReason: undefined }))
    );
    this._activeClueIndex.set(0);
  }
}
