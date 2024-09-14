import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  protected formGame!: FormGroup;

  private _formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm(): void {
    this.formGame = this._formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      cover: ['', Validators.required],
      width: ['', Validators.required],
      height: ['', Validators.required],
      length: ['', Validators.required],
    })
  }

  protected onSubmit() {
    if (this.formGame.valid) {
      console.log(this.formGame.value);

      this.formGame!.reset();
    }
  }

  protected cancelForm() {
    this.formGame!.reset();
  }
}
