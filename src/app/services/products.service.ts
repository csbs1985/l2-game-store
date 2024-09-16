import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: IProduct[] = [];

  private firstLoad = true;

  load(): Observable<IProduct[]> {
    if (this.firstLoad) {
      this.loadProducts();
      this.firstLoad = false;
    }
    return of(this.products);
  }

  create(newProduct: IProduct): Observable<IProduct[]> {
    this.products.push(newProduct);

    return of(this.products);
  }

  private loadProducts(): void {
    this.products.push(
      {
        id: 0,
        name: "Black Myth: Wukong",
        price: 0,
        cover: "https://cdn1.epicgames.com/spt-assets/ca9ef1bcf2f54043baac351366aec677/black-myth-wukong-jjjfw.png?h=480&quality=medium&resize=1&w=360",
        description: "Jogo de battle royale gratuito",
        dimension: {
          height: 0,
          width: 0,
          length: 0
        }
      },
      {
        id: 1,
        name: "Warhammer 40,000: Space Marine 2",
        price: 19.99,
        cover: "https://cdn1.epicgames.com/offer/f640a0c1648147fea7e81565b45a3003/EGS_Warhammer40000SpaceMarine2_SaberInteractive_S2_1200x1600-8b8777b3ce0c530a00af7bf8efda793b?h=480&quality=medium&resize=1&w=360",
        description: "Jogo de tiro em primeira pessoa",
        dimension: {
          height: 0,
          width: 0,
          length: 0
        }
      },
      {
        id: 2,
        name: "Monster Jam™ Showdown",
        price: 69.99,
        cover: "https://cdn1.epicgames.com/offer/42c70202dc684966a827bfcb7b49ac5f/EGS_MonsterJamShowdown_MilestoneSrl_S2_1200x1600-a819ba968f7f76350b1fa9bc1ee97f28?h=480&quality=medium&resize=1&w=360",
        description: "Jogo de ação-aventura",
        dimension: {
          height: 0,
          width: 0,
          length: 0
        }
      },
      {
        id: 3,
        name: "Core Keeper",
        price: 59.99,
        cover: "https://cdn1.epicgames.com/spt-assets/087cc93d0ada4e88ad6fefc57cfd07fa/core-keeper-2ugts.png?h=480&quality=medium&resize=1&w=360",
        description: "Jogo de RPG de ação",
        dimension: {
          height: 0,
          width: 0,
          length: 0
        }
      },
      {
        id: 4,
        name: "EA SPORTS™ Madden NFL 25",
        price: 49.99,
        cover: "https://cdn1.epicgames.com/offer/333cce509c6b413c852e5177f19f8e84/EGS_EASPORTSMaddenNFL25_Tiburon_S2_1200x1600-289740792de6bbf7eefe8c40301b4077?h=480&quality=medium&resize=1&w=360",
        description: "Jogo de ação-aventura",
        dimension: {
          height: 0,
          width: 0,
          length: 0
        }
      },
      {
        id: 5,
        name: "Dustborn",
        price: 39.99,
        cover: "https://cdn1.epicgames.com/spt-assets/e0cc29dc3a53432db8e3c2fa4cf52e26/dustborn-15qpe.jpg?h=480&quality=medium&resize=1&w=360",
        description: "Jogo de tiro em terceira pessoa",
        dimension: {
          height: 0,
          width: 0,
          length: 0
        }
      },
      {
        id: 6,
        name: "Grand Theft Auto V: Premium Edition",
        price: 24.99,
        cover: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360",
        description: "Jogo de culinária em equipe",
        dimension: {
          height: 0,
          width: 0,
          length: 0
        }
      },
      {
        id: 7,
        name: "Red Dead Redemption 2",
        price: 29.99,
        cover: "https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?h=480&quality=medium&resize=1&w=360",
        description: "Jogo de construção e exploração",
        dimension: {
          height: 0,
          width: 0,
          length: 0
        }
      },
      {
        id: 8,
        name: "Horizon Chase 2",
        price: 0,
        cover: "https://cdn1.epicgames.com/offer/e24498202a7b4c80af7e3c18e63a0b34/EGS_HorizonChase2_AquirisGameStudio_S2_1200x1600-1fd7e57b3ce2ef6d4100b586b69e1b2c?h=480&quality=medium&resize=1&w=360",
        description: "Jogo de ação em free-to-play",
        dimension: {
          height: 0,
          width: 0,
          length: 0
        }
      },
      {
        id: 9,
        name: "Fortnite",
        price: 0,
        cover: "https://cdn1.epicgames.com/offer/fn/Blade_1200x1600_1200x1600-fcea56f5eb92df731a89121e2b4416b5?h=480&quality=medium&resize=1&w=360",
        description: "Jogo de esporte com carros",
        dimension: {
          height: 0,
          width: 0,
          length: 0
        }
      }
    );
  }
}
