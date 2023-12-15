import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Products } from './model/products';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url = 'http://localhost:4200/assets/data/products.json';
  

  products = signal<any>([])
  public productsAll = computed(() => this.products())
  
  constructor(private http: HttpClient) { 
    this.http.get<any>(`${this.url}`)
    .subscribe( res => {
      this.products.set(res)
    });

  }

}
