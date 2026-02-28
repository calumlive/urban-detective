import { Component, signal, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './header.html',
    styleUrl: './header.css'
})
export class Header {
    private location = inject(Location);

    @Input() title: string = 'Urban Detective';
    @Input() variant: 'red' | 'brown' = 'brown';

    isMenuOpen = signal(false);

    toggleMenu() {
        this.isMenuOpen.set(!this.isMenuOpen());
    }

    closeMenu() {
        this.isMenuOpen.set(false);
    }

    goBack() {
        this.location.back();
    }
}
