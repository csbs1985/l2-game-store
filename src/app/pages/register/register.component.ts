import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IGame } from '../../models/game.interface';
import { GameService } from '../../services/game.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  protected formGame!: FormGroup;

  private _formBuilder = inject(FormBuilder);
  private _gameService = inject(GameService);
  private _game?: IGame;

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
      this.formatGame();
    }
  }

  private formatGame() {
    this._game = {
      name: this.formGame.get('name')?.value,
      price: this.formGame.get('price')?.value,
      cover: this.formGame.get('cover')?.value,
      dimension: {
        width: this.formGame.get('width')?.value,
        height: this.formGame.get('height')?.value,
        length: this.formGame.get('length')?.value
      }
    }

    // this._gameService.saveGame(this.formGame.value);
    this.formGame!.reset();
  }

  protected cancelForm() {
    this.formGame!.reset();
  }

  get imagePreview(): string {
    return this.formGame.get('cover')?.value;
  }
}
