import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css',
  standalone: true,
})
export class AdminProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Product A',
      price: 100,
      discount: 10,
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of product 1'

    },
    {
      id: 2,
      name: 'Product B',
      price: 200,
      discount: 15,
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of product 2'

    },
    {
      id: 3,
      name: 'Product C',
      price: 300,
      discount: null,
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of product 3'

    },
    {
      id: 4,
      name: 'Product D',
      price: 150,
      discount: 5,
      image: 'https://via.placeholder.com/150',
      description: 'This is a description of product 4'

    },
  ];

  constructor(private router: Router) {}

  addNewProduct() {
    this.router.navigate(['admin', 'products', 'new']);
  }

  editProduct(product: any) {
    this.router.navigate(['admin', 'products', product.id, 'edit']);
  }

  deleteProduct(product: any) {
    console.log('Delete Product:', product);
  }
}
