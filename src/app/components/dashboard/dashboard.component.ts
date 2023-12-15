import { Component } from '@angular/core';
import { components } from '../../common/components';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html'  
})
export default class DashboardComponent {
  components = components.filter((component) => !!component.card);

  constructor() {
    console.log(components)
  }
}
