import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SidebarService } from './services';

@Component({
  selector: 'flowbite-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() extraClass = '';
  @Input() rounded = false;

  constructor(readonly sidebarService: SidebarService) {}
}


// 3