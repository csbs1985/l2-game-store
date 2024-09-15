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
      descrition: ['', Validators.required],
      width: ['0.135', Validators.required],
      height: ['0.170', Validators.required],
      length: ['0.14', Validators.required],
    })
  }

  protected onSubmit(): void {
    if (this.formGame.valid) {
      this.formatGame();
    }
  }

  private async formatGame(): Promise<void> {
    this._game = {
      name: this.formGame.get('name')?.value,
      price: this.formGame.get('price')?.value,
      cover: this.formGame.get('cover')?.value,
      descrition: this.formGame.get('descrition')?.value,
      dimension: {
        width: this.formGame.get('width')?.value,
        height: this.formGame.get('height')?.value,
        length: this.formGame.get('length')?.value
      }
    }

    await this._gameService.saveGame(this._game);
    this.formGame!.reset();
  }

  protected cancelForm(): void {
    this.formGame!.reset();
  }

  get imagePreview(): string {
    return this.formGame.get('cover')?.value || "";
  }
}
