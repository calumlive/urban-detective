import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { trigger, transition, style, query, animate, group } from '@angular/animations';
import { MenuService } from './services/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0
          })
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(10px)' })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-10px)' }))
          ], { optional: true }),
          query(':enter', [
            animate('400ms 100ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class App {
  protected readonly title = signal('urban-detective');
  protected readonly menuService = inject(MenuService);

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.isActivated
      ? (outlet.activatedRoute.snapshot.url.join('/') || 'home')
      : '';
  }
}
