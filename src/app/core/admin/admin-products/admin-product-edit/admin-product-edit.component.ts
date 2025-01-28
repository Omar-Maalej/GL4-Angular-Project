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
    this.productForm.patchValue({ file });
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
    if (formValues.discount !== null) {
      formData.append('discount', formValues.discount.toString());
    }
    if (formValues.file) {
      formData.append('file', formValues.file);
    }

    return formData;
  }

  addProduct(formData: FormData): void {
    console.log('FormData for adding product:', formData);
    this.store.dispatch(createProduct({ productData: formData }));
    this.navigateBack();
  }

  updateProduct(formData: FormData): void {
    console.log('FormData for updating product:', formData);
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
