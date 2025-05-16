import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./home.component.css'],
    template: `
    <div *ngIf="products.length > 0">
      <ul>
        <li *ngFor="let product of products">
          <p>{{ product.title }}</p>
          <p>{{ product.price | currency }}</p>
        </li>
      </ul>
    </div>
    <div *ngIf="products.length === 0">
      <p>No products found!</p>
    </div>
  `, 
  
})
export class HomeComponent {
  products: any[] = [];
  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get<any[]>('https://fakestoreapi.com/products').subscribe((res) => {
      this.products = res;
    });
  }
}
