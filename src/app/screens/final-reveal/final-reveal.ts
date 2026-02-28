import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameState } from '../../services/game-state';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-final-reveal',
  imports: [RouterLink, Header],
  templateUrl: './final-reveal.html',
  styleUrl: './final-reveal.css',
})
export class FinalReveal {
  private gameState = inject(GameState);

  suspects = computed(() => this.gameState.suspects());
}
