import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../components/core/modal-popup/modal';
import { FavoriteProdService } from '../../_services/favorite-prod.service';
import { ProductService } from '../../_services/product.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {
  items: string[];
  items2: string[];
  selectedCategory: any;
  favoriteProds: any[];
  showFormula: boolean = true;
  showWellness: boolean = true;
  capsulesInfo: any[] = [];
  selectedCapsuleAmount: number;
  productQuantityList: number[] = [100, 200];

  constructor(public modalService: ModalService, public favoriteProdService: FavoriteProdService, public productService: ProductService) {}

  ngOnInit() {
    this.items = [ 'Iron', 'CoQ10', 'Enzymes', 'Selenium', 'Magnesium', 
                   'Calcium', 'Clandulars', 'Glutathione', 'Vitamin B', 'NAC', 
                   'Herbs', 'Vitamin K', 'Vitamin D', 'Vitamin C', 'Melatonin', 
                   'Pregnenolone', 'DHEA', 'Zinc', 'Vitamin A', 'Multiminerals', 
                   'Omega Fatty', 'Amino Acids', 'Vitamin E', 'Electrolyte', 'Probiotics', 
                   'Calcium-Magnesium', 'Chromium', 'Homeopathic', 'Multivitamins', 'Protein', 'Copper'];
                  
    this.items2 = ['All', 'New Formulas', 'Reformulations', 'Adrenal Support', 'Antioxidant Activity', 
                   'Blood Sugar Support', 'Body Composition', 'Functional Food Bars', 'Gastrointestinal Support', 'Immune System Support', 
                   'Joint & Muscle Support', 'Liver Support', 'Male Health', 'Multivitamins & Minerals', 'Neurological & Cognitive', 
                   'Oral/Dental Health', 'Probiotics', 'Relaxation & Sleep', 'Sports Nutrition', 'Thyroid Support', 
                   'Bone Health Support', 'Cardiovascular Support', 'Cell-Life Regulation', 'Cytokine Balance Support', 'Detoxification', 
                   'Essential Fatty Acids', 'Female Health'];

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

    this.favoriteProds = this.favoriteProdService.getAll();

    this.productService.productCategorySelected.subscribe((categoryName) => this.selectedCategory = categoryName);
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

  showProductList(item) {
    this.selectedCategory = item;
  }

  returnToCategory(event) {
    this.selectedCategory = undefined;
    this.showFormula = true;
    this.showWellness = true;

    if(event === 'formulas') {
      this.showFormula = true;
      this.showWellness = false;
    } else if(event === 'wellness') {
      this.showFormula = false;
      this.showWellness = true;
    }
  }

  viewAll() {
    this.showFormula = true;
    this.showWellness = true;
  }

  viewWellness() {
    this.showFormula = false;
    this.showWellness = true;
  }

  viewFormula() {
    this.showFormula = true;
    this.showWellness = false;
  }

}
