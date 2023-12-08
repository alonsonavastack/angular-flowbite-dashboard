import { Component, Input } from '@angular/core';
import { SidebarService } from './services';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SanitizeHtmlPipe } from './pipes';
import { BadgeComponent } from './badge.component';

@Component({
  selector: 'flowbite-sidebar-item',
  standalone: true,
  imports: [CommonModule, RouterModule, SanitizeHtmlPipe, BadgeComponent],
  templateUrl: './sidebar-item.component.html'
})
export class SidebarItemComponent {

  @Input() icon?: string;
  @Input() link?: string;
  @Input() label?: string;

  constructor(readonly sidebarService: SidebarService) {}
}



// 6   pero antes crear pipe SanitizeHtmlPipe
