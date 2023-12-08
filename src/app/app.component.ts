import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { DarkThemeToggleComponent } from './common/dark-theme-toggle.component';
import { NavbarComponent } from './common/navbar.component';
import { SidebarService } from './common/services/sidebar';
import { SidebarComponent } from './common/sidebar.component';
import { SidebarItemGroupComponent } from './common/sidebar-item-group.component';
import { SidebarItemComponent } from './common/sidebar-item.component';
import { components } from './common/components';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, RouterModule, 
    DarkThemeToggleComponent, NavbarComponent, SidebarComponent, SidebarItemGroupComponent, SidebarItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dashboard';
  components = components;
  constructor(readonly sidebarService: SidebarService) {}
  


  ngOnInit(): void {
    initFlowbite();
  }
}
