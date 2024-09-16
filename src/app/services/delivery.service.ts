import { Injectable } from "@angular/core";
import { IBox } from "../models/box.interface";

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  findIdealBox(products: any[]) {
    const minimumBoxSize = this.calculateMinimumBoxSize(products);
    const boxes: IBox[] = [
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

    let idealBox = null;
    let idealBoxVolume = Infinity;

    for (const box of boxes) {
      if (
        box.height >= minimumBoxSize.height &&
        box.width >= minimumBoxSize.width &&
        box.length >= minimumBoxSize.length
      ) {
        const boxVolume = box.height * box.width * box.length;
        if (boxVolume < idealBoxVolume) {
          idealBox = box;
          idealBoxVolume = boxVolume;
        }
      }
    }

    return idealBox;
  }

  calculateMinimumBoxSize(products: any[]) {
    let maxHeight = 0;
    let maxWidth = 0;
    let maxLength = 0;

    for (const product of products) {
      maxHeight = Math.max(maxHeight, product.height);
      maxWidth = Math.max(maxWidth, product.width);
      maxLength = Math.max(maxLength, product.length);
    }

    return {
      height: maxHeight,
      width: maxWidth,
      length: maxLength
    };
  }
}
