import { Component, OnInit, Input } from '@angular/core';

import { FavoriteProdService } from '../../_services/favorite-prod.service';
import { ProtocolService } from '../../_services/protocol.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  capsulesInfo: any[];
  favoriteProducts: any[];
  productImageSuffix: string = '';

  @Input() product: any;

  constructor(public favoriteProdService: FavoriteProdService, public protocolService: ProtocolService) { }

  ngOnInit() {
    this.capsulesInfo = [
      {
        focus: true,
        amount: 100
      },
      {
        focus: false,
        amount: 200
      }
    ];

    this.favoriteProducts = this.favoriteProdService.getAll();
  }

  capsuleSelected(idx) {
    if(!this.capsulesInfo[idx].focus) {
      for(let i=0; i<this.capsulesInfo.length; i++) {
        this.capsulesInfo[i].focus = false;
      }
      this.capsulesInfo[idx].focus = true;
    }
  }

  checkFavorite() {
    for(let i=0; i<this.favoriteProducts.length; i++) {
      if(this.favoriteProducts[i].id === this.product.id) {
        return i;
      }
    }
    return -1;
  }

  toggleFavorite() {
    let favoriteIdx = this.checkFavorite();
    if(favoriteIdx === -1) {
      this.favoriteProdService.addProduct(this.product);
    } else {
      this.favoriteProdService.deleteByIndex(favoriteIdx);
    }
  }

  setProductImg(suffix) {
    this.productImageSuffix = suffix;
  }

  addToProtocol(product) {
    this.protocolService.productAdded.next(product);
  }

}
