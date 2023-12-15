import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav-pagination',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>navPagination works!</p>`,
  templateUrl: './navPagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavPaginationComponent { }
