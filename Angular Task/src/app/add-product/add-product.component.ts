import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Category {
  _id: string;
  name: string;
}

interface Product {
  code: string;
  name: string;
  excerpt: string;
  description?: string;
  price: number;
  stock: number;
  category?: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.productForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      excerpt: ['', Validators.required],
      description: [''],
      price: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.http.get<{ categories: Category[] }>('http://localhost:3000/api/v1/categories').subscribe(
      (response) => {
        this.categories = response.categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
      this.http.post('http://localhost:3000/api/v1/products', product).subscribe(
        (response) => {
          console.log('Product added successfully', response);
          alert("Product Added Successfully!");
          this.productForm.reset();
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
