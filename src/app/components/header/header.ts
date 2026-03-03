import { Component, Input, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MenuService } from '../../services/menu';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.html',
    styleUrl: './header.css'
})
export class Header {
    private location = inject(Location);
    private menuService = inject(MenuService);

    @Input() title: string = 'Urban Detective';
    @Input() variant: 'red' | 'brown' = 'brown';

    isMenuOpen = this.menuService.isOpen;

    toggleMenu() {
        this.menuService.toggle();
    }

    goBack() {
        this.location.back();
    }
}
