import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AdminProductState } from '../../../../store/admin/product/product.state';
import {
  createProduct,
  updateProduct,
} from '../../../../store/admin/product/product.actions';

export interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
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
  productId!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store<{ adminProduct: AdminProductState }>
  ) {}

  ngOnInit(): void {
    this.addOperation = this.route.snapshot.params['id'] === undefined;
    this.productId = this.route.snapshot.params['id'];

    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
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
      image: 'sample-product.jpg',
      description: 'This is a sample description for the product.',
    };

    this.productForm.patchValue({
      name: mockProduct.name,
      price: mockProduct.price,
      description: mockProduct.description,
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.productForm.get('file')?.setValue(file);
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = this.prepareFormData();

      if (this.addOperation) {
        this.addProduct(formData);
      } else {
        this.updateProduct(formData);
      }
    }
  }

  prepareFormData(): FormData {
    const formData = new FormData();
    const formValues = this.productForm.value;

    formData.append('name', formValues.name);
    formData.append('price', formValues.price.toString());
    formData.append('description', formValues.description);
    if (formValues.file) {
      formData.append('image', formValues.file);
    }

    return formData;
  }

  addProduct(formData: FormData): void {
    this.store.dispatch(createProduct({ productData: formData }));
    this.navigateBack();
    console.log('jaw behi lenna 1');
  }

  updateProduct(formData: FormData): void {
    this.store.dispatch(
      updateProduct({ id: this.productId, productData: formData })
    );
    this.navigateBack();
  }

  navigateBack(): void {
    this.router.navigate(['admin', 'products']);
  }

  get f() {
    return this.productForm.controls;
  }
}
