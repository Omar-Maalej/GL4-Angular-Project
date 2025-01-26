import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export interface Product {
  name: string;
  price: number;
  discount: number | null;
  image: string;
}

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  imports: [ReactiveFormsModule],
  styleUrls: ['./admin-product-edit.component.css'],
  standalone: true,
})
export class AdminProductEditComponent implements OnInit {
  addOperation!: boolean;
  productForm!: FormGroup;
  currentImage!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addOperation = this.route.snapshot.params['id'] === undefined;

    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      discount: [null, [Validators.min(0), Validators.max(100)]],
      file: [null, this.addOperation ? Validators.required : []],
    });

    if (!this.addOperation) {
      const productId = +this.route.snapshot.params['id'];
      this.loadProduct(productId);
    }
  }

  loadProduct(productId: number): void {
    const mockProduct: Product = {
      name: 'Sample Product',
      price: 99.99,
      discount: 10,
      image: 'sample-product.jpg',
    };

    this.productForm.patchValue(mockProduct);
    this.currentImage = mockProduct.image;
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.productForm.addControl('file', file);
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product = {
        ...this.productForm.getRawValue(),
      };

      if (this.addOperation) {
        this.addProduct(product);
      } else {
        this.updateProduct(product);
      }
    }
  }

  addProduct(product: Product): void {
    console.log('Product added:', product);
    this.navigateBack();
  }

  updateProduct(product: Product): void {
    console.log('Product updated:', product);
    this.navigateBack();
  }

  navigateBack(): void {
    this.router.navigate(['admin', 'products']);
  }

  get f() {
    return this.productForm.controls;
  }
}
