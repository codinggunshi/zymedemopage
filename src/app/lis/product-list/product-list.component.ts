import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ModalService } from '../../components/core/modal-popup/modal';
import { FavoriteProdService } from '../../_services/favorite-prod.service';
import { ProductService } from '../../_services/product.service';
import { ProtocolService } from '../../_services/protocol.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  categories: any[];
  products: any[];
  brandExpanded: boolean = true;
  favoriteProducts: any[];

  capsulesInfo: any[];
  selectedCapsuleAmount: number;

  selectedProductDetail: any;

  productQuantityList: any[];

  @Input() productList: any;

  @Output() viewCateTriggered = new EventEmitter<string>();

  formulationList = [];
  typeList = [];
  allergenList = [];
  labelList = [];
  selectedFormula = [];
  selectedType = [];
  selectedAllergen = [];
  selectedLabel = [];

  dropdownSettings = {};

  constructor(public modalService: ModalService, public favoriteProdService: FavoriteProdService, public productService: ProductService, public protocolService: ProtocolService) { }

  ngOnInit() {
    this.categories = [
      {label: 'Formulas'},
      {label: 'Wellness'}
    ];

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
    this.selectedCapsuleAmount = 100;

    this.productQuantityList = [
      {value: '1', displayName: '1'},
      {value: '2', displayName: '2'},
      {value: '3', displayName: '3'},
      {value: '4', displayName: '4'},
      {value: '5', displayName: '5'}
    ];

    this.products = [
      {id: 1, name: 1, title: 'Aqua-E', text: 'Water-Soluble Vitamin', orginalPrice: '45.33', price: '39.61'},
      {id: 2, name: 2, title: 'Aqua-E', text: 'Water-Soluble Vitamin', orginalPrice: '65.02', price: '49.61'},
      {id: 3, name: 3, title: 'Aqua-E', text: 'Water-Soluble Vitamin', orginalPrice: '54.33', price: '39.61'},
      {id: 4, name: 4, title: 'Aqua-E', text: 'Water-Soluble Vitamin', orginalPrice: '53.33', price: '49.63'},
      {id: 5, name: 5, title: 'Aqua-E', text: 'Water-Soluble Vitamin', orginalPrice: '55.53', price: '39.61'},
      {id: 6, name: 6, title: 'Aqua-E', text: 'Water-Soluble Vitamin', orginalPrice: '44.32', price: '35.41'},
      {id: 7, name: 4, title: 'Aqua-E', text: 'Water-Soluble Vitamin', orginalPrice: '47.13', price: '38.68'}
    ];

    this.formulationList = [
      { item_id: 1, item_text: 'Magnesium Combo' },
      { item_id: 2, item_text: 'Magnesium' },
    ];
    this.typeList = [
      { item_id: 1, item_text: 'Aspartate' },
      { item_id: 2, item_text: 'Bisglycinate' },
      { item_id: 3, item_text: 'Carbonate' },
      { item_id: 4, item_text: 'Chloride' },
      { item_id: 5, item_text: 'Citrate' },
      { item_id: 6, item_text: 'Glycinate' },
    ];
    this.allergenList = [
      { item_id: 1, item_text: 'Corn Free' },
      { item_id: 2, item_text: 'Diary Free' },
      { item_id: 3, item_text: 'Egg Free' },
      { item_id: 4, item_text: 'Sugar Free' },
      { item_id: 5, item_text: 'Starch Free' },
      { item_id: 6, item_text: 'Yeast Free' }
    ];
    this.labelList = [
      { item_id: 1, item_text: 'Halal' },
      { item_id: 2, item_text: 'Kosher' },
      { item_id: 3, item_text: 'Non-GMO' },
      { item_id: 4, item_text: 'vegan' },
      { item_id: 5, item_text: 'vegetarian' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 0,
      allowSearchFilter: true
    };

    this.favoriteProducts = this.favoriteProdService.getAll();

    this.productService.productCategorySelected.subscribe(() => this.selectedProductDetail = undefined);
  }

  CategorySelected(idx) {  
    if(idx === 0) {
      this.viewCateTriggered.emit('formulas');
    } else if(idx === 1) {
      this.viewCateTriggered.emit('wellness');
    }
  }

  viewProductDetail(productId) {
    this.selectedProductDetail = this.products[productId];
    this.modalService.getModal('productQuickViewModal').close();
  }

  viewAll() {
    this.viewCateTriggered.emit('all');
  }

  toggleExpandBrands() {
    this.brandExpanded = !this.brandExpanded;
  }

  capsuleSelected(idx) {
    if(!this.capsulesInfo[idx].focus) {
      for(let i=0; i<this.capsulesInfo.length; i++) {
        this.capsulesInfo[i].focus = false;
      }
      this.capsulesInfo[idx].focus = true;
      this.selectedCapsuleAmount = this.capsulesInfo[idx].amount;
    }
  }

  toggleFavorite(productIdx) {
    let favoriteIdx = this.checkFavorite(productIdx);
    if(favoriteIdx === -1) {
      this.favoriteProdService.addProduct(this.products[productIdx]);
    } else {
      this.favoriteProdService.deleteByIndex(favoriteIdx);
    }
  }

  checkFavorite(idx) {
    for(let i=0; i<this.favoriteProducts.length; i++) {
      if(this.favoriteProducts[i].id === this.products[idx].id) {
        return i;
      }
    }
    return -1;
  }

  addToProtocol() {
    let product = {name: 1, price: 40.24}; //pass real data to modal later, now add a fake one
    this.protocolService.productAdded.next(product);
    this.modalService.getModal('productQuickViewModal').close();
  }

}
