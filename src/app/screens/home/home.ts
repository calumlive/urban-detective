import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private router = inject(Router);

  startSearch() {
    this.router.navigate(['/missions']);
  }
}
