import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteProdService {

  private favoriteList: any[] = [];

  constructor() { }

  getAll() {
    return this.favoriteList;
  }

  addProduct(product) {
    this.favoriteList.push(product);
  }

  deleteByIndex(idx) {
    this.favoriteList.splice(idx, 1);
  }
}
