import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../components/core/modal-popup/modal';
import { ProtocolService } from '../../_services/protocol.service';
import { ProductService } from '../../_services/product.service';

import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

import { Product } from '../../_model/product';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: 'app-new-protocol',
  templateUrl: './new-protocol.component.html',
  styleUrls: ['./new-protocol.component.scss'],

  animations: [
    trigger("enterAnimation", [
      transition(":leave", [
        style({ opacity: "1", height: "*" }),
        animate("300ms", style({ opacity: "0", height: 0 }))
      ]),
    ]),
  ]
})
export class NewProtocolComponent implements OnInit {
  items: any[] = [];
  dropdownSettingsSingle: any;
  dropdownListSingle: any[];

  public expand: any[] = [];

  public Editor = DecoupledEditor;

  public onReady(editor) {
    editor.ui.view.editable.element.parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.view.editable.element
    );
  };

  public editorModel = {
    editorData: '<h1>Your Title</h1><p>Your personal message</p>'
  };

  recommendations: any[] = [];
  checkdRecommend: number = 0;

  foodsToBeAvoid = [
    {category: 'fish', foods: ['Catfish', 'Shrimp', 'Basa', 'Flounder', 'Hake', 'Scup', 'Smelt', 'Rinbow trout', 'Turbot']},
    {category: 'snack', foods: ['Bitterballen', 'Bonda', 'Cereal', 'Cokodok', 'Crêpe', 'Croquette', 'Doughnut', 'Gulha', 'Chebakia']},
    {category: 'fruit', foods: ['Mango', 'Melon', 'Salak', 'Strawberry', 'Yuzu', 'Quince', 'Kumquat', 'Coconut', 'Apple', 'Açaí', 'Olive', 'Tamarind', 'Pomelo', 'Pear']}
  ];
  viewableLength: number[] = [];
  currentDragged: number[];
  draggedFoods: any[] = [];

  foodsToRotateOrigin = [
    {name: 'Fish', rotates: [false, true, false, false, false]},
    {name: 'Snack', rotates: [false, false, true, true, false]},
    {name: 'Chicken', rotates: [true, true, false, false, false]},
    {name: 'Meat', rotates: [false, false, false, false, false]},
    {name: 'Beef', rotates: [true, true, false, false, false]},
    {name: 'Beer', rotates: [false, true, false, true, false]},
    {name: 'Milk', rotates: [true, true, false, false, false]},
    {name: 'Juice', rotates: [false, false, false, true, false]},
    {name: 'Lamb', rotates: [true, true, false, false, true]},
    {name: 'Hotpot', rotates: [false, true, false, true, false]},
    {name: 'Pork', rotates: [false, false, false, false, false]},
    {name: 'Shirmp', rotates: [false, false, false, false, false]},
    {name: 'Potato', rotates: [true, true, false, true, false]},
    {name: 'Tomato', rotates: [false, false, false, false, true]}
  ];
  foodsToRotate: any[];
  rotateDirty = false;

  protocols: any[] = [];

  capsuleAmountList = [{displayName: 100}, {displayName: 200}];
  frequencyList = [{displayName: 'once a day'}, {displayName: 'twice a day'}];
  durationList = [{displayName: '7 days'}, {displayName: '15 days'}, {displayName: '30 days'}];
  quantityList = [{displayName: 1}, {displayName: 2}, {displayName: 3}];

  activatedProductIndexes: any; //when user get a product from modal to add, these two indexes tells which protocol and which product in that protocol to add/update

  totalPrice: number = 0;

  constructor(public modalService: ModalService, public protocolService: ProtocolService, public productService: ProductService) {
  }

  ngOnInit() {
    this.items = [
      {label: 'Common conditions'}, {label: 'Adrenal Support'}, {label: 'Allergy Relief'},
      {label: 'Anxiety Support'}, {label: 'Blood Sugar Supplement'}, {label: 'Bone Health'},
      {label: 'Candida'}, {label: 'Cardiovascular Supplement'}, {label: 'Cholesterol'}
    ];

    for(let i=0; i<this.items.length; i++) {
      this.viewableLength.push(8);
    }

    this.dropdownSettingsSingle = {
      singleSelection: true,
      closeDropDownOnSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      allowSearchFilter: true,
      noDataAvailablePlaceholderText: 'No notes saved'
    };

    this.dropdownListSingle = [
      { item_id: 1, item_text: 'Header 1' },
      { item_id: 2, item_text: 'Header 2' },
      { item_id: 3, item_text: 'Header 3' },
      { item_id: 4, item_text: 'Header 4' },
      { item_id: 5, item_text: 'Header 5' }
    ];

    this.expand = [true, false, false, false];

    this.recommendations = [
      { title: 'Eat Healthy', checked: false, description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +  
      'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit Lorem ipsum dolor sit amet, consec-' +
      'tetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim'},

      { title: 'Exercise', checked: false, description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ' +  
      'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit Lorem ipsum dolor sit amet, consec-' +
      'tetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'},

      { title: 'Quit Smoking', checked: false, description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +  
      'erat volutpat. Ut wnim ad minim  tation ullamcorper suscipit Lorem ipsum dolor sit amet, consec-' +
      'tetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam'},

      { title: 'Sleep Earlier', checked: false, description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +  
      'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit Lorem ipsum dolor sit amet, consec-' +
      'tetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim'},

      { title: 'Meditation', checked: false, description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscid tincidunt ut laoreet dolore magna aliquam' +  
      'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit Lorem ipsum dolor sit amet, consec-' +
      'tetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad '},

      { title: 'Stay Happy', checked: false, description:
      'Ldipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +  
      'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit Lorem ipsum dolor sit amet, consec-' +
      'tetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi'},
    ];

    this.foodsToRotate = JSON.parse(JSON.stringify(this.foodsToRotateOrigin));

    this.protocols = [
      {name: 'Allergy Relief Protocol', product:[
        {id: 1, name: 1, title: 'Aqua-E', text: 'Water-Soluble Vitamin', subText: 'TOCOPHEROLS + TOCOTRIENOLS', size: 180, orginalPrice: '48.33', quantity: 1, frequency: 'once a day', amountPerDay: '1', duration: '7 days', supply: '60 day supply', 'instruction': ''},
        {id: 1, name: 1, title: 'Aqua-E', text: 'Water-Soluble Vitamin', subText: 'TOCOPHEROLS + TOCOTRIENOLS', size: 180, orginalPrice: '81.23', quantity: 1, frequency: 'twice a day', amountPerDay: '1', duration: '30 days', supply: '7 day supply', 'instruction': ''}
      ]},
      {name: 'Allergy Relief Protocol', product:[
        {id: 1, name: 1, title: 'Aqua-E', text: 'Water-Soluble Vitamin', subText: 'TOCOPHEROLS + TOCOTRIENOLS', size: 180, orginalPrice: '48.33', quantity: 1, frequency: 'once a day', amountPerDay: '1', duration: '15 days', supply: '60 day supply', 'instruction': ''}
        ]}
    ];

    this.protocolService.productAdded.subscribe((product: Product) => {
      this.modalService.getModal('selectProductModal').close();
      if(this.activatedProductIndexes.productIdx !== -1) {
        this.protocols[this.activatedProductIndexes.protocolIdx].product[this.activatedProductIndexes.productIdx].imgUrl = product.name; //no real data yet, just for logic test, get more product information later
        this.protocols[this.activatedProductIndexes.protocolIdx].product[this.activatedProductIndexes.productIdx].price = product.price;
      } else { //add a new product by product pass in as param, no real data yet, add a fixed one
        let newProduct = {id: 1, name: 1, title: 'Aqua-E', text: 'Water-Soluble Vitamin', subText: 'TOCOPHEROLS + TOCOTRIENOLS', size: 180, orginalPrice: '48.33', quantity: 1, frequency: 'once a day', amountPerDay: '1', duration: '7 days', supply: '60 day supply', 'instruction': '', price: product.price, imgUrl: product.name};
        this.protocols[this.activatedProductIndexes.protocolIdx].product.push(newProduct);
      }
      this.totalPrice += Number(product.price);
    });
  }

  switchExpand(idx) {
    for(let i=0; i<this.expand.length; i++) {
      this.expand[i] = false;
    }
    this.expand[idx] = true;
  }

  collapse(e, idx) {
    e.stopPropagation();
    this.expand[idx] = false;
  }

  isCkEditorDirty() {
    if(this.editorModel.editorData !== '<h1>Your Title</h1><p>Your personal message</p>') {
      return true;
    }
    return false;
  }

  toggleRecommend(idx) {
    this.recommendations[idx].checked = !this.recommendations[idx].checked;
    if(this.recommendations[idx].checked) {
      this.checkdRecommend++;
    } else {
      this.checkdRecommend--;
    }
  }

  onDragStart(event: PointerEvent, i: number, j: number): void {
    this.currentDragged = [i, j];
  }

  addFoodToAvoid() {
    const category = this.foodsToBeAvoid[this.currentDragged[0]].category;
    const item = this.foodsToBeAvoid[this.currentDragged[0]].foods[this.currentDragged[1]]; //get the item first then do splice, not vice versa
    this.foodsToBeAvoid[this.currentDragged[0]].foods.splice(this.currentDragged[1], 1);
    this.draggedFoods.push({category: category, name: item});
  }

  removeFoodFromAvoid(food, idx) {
    this.foodsToBeAvoid.some((cur) => {
      if(cur.category == food.category) {
        cur.foods.push(food.name);
        return true;
      }
    });
    this.draggedFoods.splice(idx, 1);
  }

  loadMore(idx) {
    this.viewableLength[idx] = undefined;
  }

  toggleCheck(i, j) {
    this.foodsToRotate[i].rotates[j] = !this.foodsToRotate[i].rotates[j];
    this.rotateDirty = true;
  }
  
  resetRotate() {
    this.foodsToRotate = JSON.parse(JSON.stringify(this.foodsToRotateOrigin));
    this.rotateDirty = false;
  }



  updateQuantity(qty, i, j) {
    let diff = qty - this.protocols[i].product[j].quantity;
    this.protocols[i].product[j].quantity = qty;
    this.totalPrice += this.protocols[i].product[j].price * diff;
  }

  removeProtocol(i) {
    for(let j=0; j<this.protocols[i].product.length; j++) {
      if(this.protocols[i].product[j].price) {
        this.totalPrice -= this.protocols[i].product[j].price * this.protocols[i].product[j].quantity;
      }
    }
    this.protocols.splice(i, 1);
  }

  removeProduct(i, j) {
    if(this.protocols[i].product[j].price) {
      this.totalPrice -= this.protocols[i].product[j].price * this.protocols[i].product[j].quantity;
    }
    if(this.protocols[i].product.length === 1) {
      this.protocols.splice(i, 1);
    } else {
      this.protocols[i].product.splice(j, 1);
    }
  }

  addProductFromCategory(i, j) {
    this.modalService.getModal('selectProductModal').open();
    this.activatedProductIndexes = {protocolIdx: i, productIdx: j};
    this.productService.productCategorySelected.next('categoryName'); // pass real data later, both product-home(for display list) and product list(for not display detail) subscribe to it
  }

  addProduct(i) {
    this.modalService.getModal('selectProductModal').open();
    this.activatedProductIndexes = {protocolIdx: i, productIdx: -1};
    this.productService.productCategorySelected.next(undefined);
  }
}
