import { CommonModule, NgFor } from '@angular/common';
import {  Component, computed, inject, signal } from '@angular/core';
import { CrudService } from './crud.service';

import { NavPaginationComponent } from './navPagination.component';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    CommonModule, NavPaginationComponent
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',

})
export default class CrudComponent {

  public crudService = inject(CrudService);  

  getData(data: any){
    console.log(data)
  }
 
}
