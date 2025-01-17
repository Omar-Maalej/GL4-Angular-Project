import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  imports: [UpperCasePipe],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  fakeProducts = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      image: 'assets/sport-man.jpg',
      discount: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      image: 'https://via.placeholder.com/450',
      discount: 20,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      image: 'https://via.placeholder.com/450',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
      image: 'https://via.placeholder.com/450',
      discount: 40,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      image: 'https://via.placeholder.com/450',
      discount: 20,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      image: 'https://via.placeholder.com/450',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
      image: 'https://via.placeholder.com/450',
      discount: 40,
    }
  ]



}
