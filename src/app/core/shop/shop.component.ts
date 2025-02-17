import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from '../../models/product';
import { ShopService } from '../../services/shop.service';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem';
import { CartComponent } from '../cart/cart.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-shop',
  imports: [ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private shopService: ShopService,
    private cartService: CartService,
    private productServcie: ProductService
  ) {}
  ngOnInit(): void {
    this.loadproducts();
  }

  loadproducts() {
    this.productServcie.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(product: Product) {
    const currentItems = this.cartService.getCartItems();
    const existingItem = currentItems.find(
      (item) => item.prodId === product.id
    );

    if (existingItem) {
      this.cartService.updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      const cartItem: CartItem = {
        prodId: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      };
      this.cartService.addToCart(cartItem);
    }

    // Show toast message
  }
}
