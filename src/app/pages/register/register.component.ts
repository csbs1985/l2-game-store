import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/products.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  private _formBuilder = inject(FormBuilder);
  private _productService = inject(ProductService);

  protected formProduct!: FormGroup;

  private _product?: IProduct;

  protected msgSuccess: boolean = false;
  protected msgError: boolean = false;

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm(): void {
    this.formProduct = this._formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      cover: ['', Validators.required],
      description: ['', Validators.required],
      width: [0.135, Validators.required],
      height: [0.170, Validators.required],
      length: [0.14, Validators.required],
    })
  }

  protected onSubmit(): void {
    if (this.formProduct.valid) {
      this.formatProduct();
    }
  }

  private async formatProduct(): Promise<void> {
    this._product = {
      id: Math.floor(Math.random() * 91) + 10,
      name: this.formProduct.get('name')?.value,
      price: parseFloat(this.formProduct.get('price')?.value),
      cover: this.formProduct.get('cover')?.value,
      description: this.formProduct.get('description')?.value,
      dimension: {
        width: parseFloat(this.formProduct.get('width')?.value),
        height: parseFloat(this.formProduct.get('height')?.value),
        length: parseFloat(this.formProduct.get('length')?.value)
      }
    }

    await this.createProduct();
  }

  private createProduct(): void {
    this._productService.create(this._product as IProduct).subscribe({
      error: () => this.createProductError(),
      next: () => this.createProductSuccess(),
    });

    setInterval(() => {
      this.cancelForm();
    }, 3000);
  }

  private createProductSuccess(): void {
    this.msgSuccess = true;

    setInterval(() => {
      this.cancelForm();
    }, 3000);
  }

  private createProductError(): void {
    this.msgError = true;

    setInterval(() => {
      this.msgError = false;
    }, 3000);
  }

  protected cancelForm(): void {
    this.msgSuccess = this.msgError = false;
    this.formProduct!.reset();
  }

  get imagePreview(): string {
    return this.formProduct.get('cover')?.value || "";
  }
}
