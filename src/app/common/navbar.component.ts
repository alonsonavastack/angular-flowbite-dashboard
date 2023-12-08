import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'flowbite-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html'  
})
export class NavbarComponent {
  @Input() extraClass = '';
  @Input() rounded = false;
  @Input() border = false;
  @Input() fluid = false;
}


// 1