import { computed, inject, Injectable } from "@angular/core";
import { IBox } from "../models/box.interface";
import { IProduct } from "../models/product.interface";
import { CartService } from "./cart.service";

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  protected _cartService = inject(CartService);

  protected _boxes: IBox[] = [
    {
      id: 1,
      height: 30,
      width: 40,
      length: 80,
      description: 'Pequena'
    },
    {
      id: 2,
      height: 80,
      width: 50,
      length: 40,
      description: 'Média'
    },
    {
      id: 3,
      height: 50,
      width: 80,
      length: 60,
      description: 'Grande'
    }
  ];

  deliveryBox = computed(() => { return this.findIdealBox()!.description });
  deliveryQtd = computed(() => { return this.findIdealBox()!.qtd });

  private findIdealBox(): { description: string, qtd: number } {
    const products = this._cartService.cartItems().map((p) => p.product);
    const minimumBoxSize = this.calculateSmallestBox(products);

    let idealBox = '';
    let idealBoxVolume = Infinity;

    for (const box of this._boxes) {
      if (
        box.height >= minimumBoxSize.height &&
        box.width >= minimumBoxSize.width &&
        box.length >= minimumBoxSize.length
      ) {
        const boxVolume = box.height * box.width * box.length;
        if (boxVolume < idealBoxVolume) {
          idealBox = box.description;
          idealBoxVolume = boxVolume;
        }
      }
    }

    const idealBoxObject = this._boxes.find((box) => box.description === idealBox);
    const numberOfBoxes = this.calculateNumberOfBoxes(minimumBoxSize, idealBoxObject!);

    return { description: idealBox, qtd: numberOfBoxes };
  }

  private calculateSmallestBox(products: IProduct[]): { height: number, width: number, length: number } {
    let maxHeight = 0;
    let maxWidth = 0;
    let maxLength = 0;

    for (const product of products) {
      maxHeight = maxHeight + product.dimension.height;
      maxWidth = maxWidth + product.dimension.width;
      maxLength = maxLength + product.dimension.length;
    }

    return { height: maxHeight, width: maxWidth, length: maxLength };
  }

  private calculateNumberOfBoxes(minimumBoxSize: { height: number, width: number, length: number }, idealBox: IBox): number {
    const idealBoxVolume = idealBox.height * idealBox.width * idealBox.length;
    const minimumBoxVolume = minimumBoxSize.height * minimumBoxSize.width * minimumBoxSize.length;

    return Math.ceil(minimumBoxVolume / idealBoxVolume);
  }
}
