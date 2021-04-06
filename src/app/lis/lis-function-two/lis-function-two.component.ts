import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { FileUploader } from '../../_directive/file-upload/file-uploader.class';

import { ModalService } from '../../components/core/modal-popup/modal';

import * as shape from 'd3-shape';

@Component({
  selector: "app-list-function-two",
  templateUrl: "./lis-function-two.component.html",
  styleUrls: ["./lis-function-two.component.scss"]
})
export class LisFunctionTwoComponent implements OnInit {
  disabled = true;
  public name: String;
  public items: any[];
  public treeItems: any[];
  public headerItems: any[];
  floatNavItems: any[];
  dropdownFloatList: any[];

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  dropdownListSingle = [];
  selectedItemsSingle = [];
  dropdownSettingsSingle = {};

  uploader:FileUploader;
  response:string;

  flatButtonOptions = [];

  // chart
  single: any[];
  multi: any[];
  multiCurve: any[];
  bubble: any[];
  view: any[] = [700, 400];

  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  inputBoxVal = 'boxModel';
  inputBoxVal2 = 1;
  inputBoxVal3 = 1;
  inputFieldVal = 'fieldModel';
  inputRoundVal = 'roundModel';
  searchSlideModel = '';
  textareaModel = 'Here is some not very long text.';
  textareanotebookModel = '';

  // pie chart
  showLabels = true;
  explodeSlices = false;
  doughnut = true;

  // curve type
  curve = shape.curveBasis;

  // numberOnly test variable
  numberOnlyTest: any;

  //color scheme, can defined as many colors as you want
  colorScheme = {
    domain: ['#122f3b', '#2f8da4', '#54b5c4', '#D1E6FF']
  };

  @ViewChild('uploadButton') btnElementRef: ElementRef;
  testInitDropdown: any;

  constructor(public modalService: ModalService) {
    this.flatButtonOptions = [{color: 'primary'}];
  }

  public fileOverBase(e:any):void {
  }

  public removeFromUpload(idx) {
    this.uploader.queue.splice(idx, 1);
  }

  public triggerUploadButtonClick() {
    this.btnElementRef.nativeElement.click();
  }

  public updateSrc(event) {
    event.target.src = '../../../assets/images/file-type/txt.png';
  }

  public upload() {
    this.uploader.uploadAll();
  }

  ngOnInit() {
    
    this.name = "test";

    this.floatNavItems = [
      {
        label: 'About This App',
        url: ''
      },
      {
        label: 'Documentation',
        url: ''
      },
      {
        label: 'FAQ',
        url: ''
      },
      {
        label: 'Dashboard',
        url: ''
      },
      {
        label: 'To Billing',
        url: ''
      }
    ]

    this.treeItems = [
      {
        label: "Home"
      },
      {
        label: "Products",
        items: [
          {
            label: "Product 1"
          },
          {
            label: "Product 2",
            items: [{ label: "Sub Product 1" }, { label: "Sub Product 2" }]
          }
        ]
      },
      {
        label: "About",
      },
      {
        label: "Contact",
      },
      {
        label: "Setting",
      },
      {
        label: "Goods",
        items: [
          {
            label: "Meat",
            items: [{ label: "Meat 1" }, { label: "Meat 2" }]
          },
          {
            label: "Snack",
            items: [
              { label: "Snack 1" },
              { label: "Snack 2" },
              { label: "Snack 3" }
            ]
          },
          {
            label: "Vegetable",
            items: [{ label: "Sub Product 1" }, { label: "Sub Product 2" }]
          }
        ]
      },
      {
        label: "Gallery",
      },
      {
        label: "Panel",
      }
    ];

    this.dropdownFloatList = [
      {value: 'Vibrant America', displayName: 'Vibrant America'},
      {value: 'Vibrant Genomics', displayName: 'Vibrant Genomics'},
      {value: 'mVibrant Wellness', displayName: 'Vibrant Wellness'},
      {value: 'Vibrant Onepay', displayName: 'Vibrant Onepay'}
    ];

    this.testInitDropdown = this.dropdownFloatList[1].value;

    this.dropdownList = [
      { item_id: 1, item_text: 'Denver' },
      { item_id: 2, item_text: 'San Jose' },
      { item_id: 3, item_text: 'Rome' },
      { item_id: 4, item_text: 'Boston' },
      { item_id: 5, item_text: 'New York' },
      { item_id: 6, item_text: 'New Yorke' },
      { item_id: 7, item_text: 'Boston' },
      { item_id: 8, item_text: 'Bosto' },
      { item_id: 9, item_text: 'Bost' },


    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Rome' },
      { item_id: 4, item_text: 'Boston' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.dropdownListSingle = [
      { item_id: 1, item_text: 'Denver' },
      { item_id: 2, item_text: 'San Jose' },
      { item_id: 3, item_text: 'Rome' },
      { item_id: 4, item_text: 'Boston' },
      { item_id: 5, item_text: 'New York' }
    ];
    this.selectedItemsSingle = [
      { item_id: 3, item_text: 'Rome' }
    ];
    this.dropdownSettingsSingle = {
      singleSelection: true,
      closeDropDownOnSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.items = [
      {
        label: "Home",
        icon: "icon ion-md-home"
      },
      {
        label: "Products",
        icon: "icon ion-md-menu",
        items: [
          {
            label: "Product 1"
          },
          {
            label: "Product 2",
            items: [{ label: "Sub Product 1" }, { label: "Sub Product 2" }]
          }
        ]
      },
      {
        label: "About",
        icon: "icon ion-md-bookmark"
      },
      {
        label: "Contact",
        icon: "icon ion-md-call"
      },
      {
        label: "Setting",
        icon: "icon ion-md-settings"
      },
      {
        label: "Goods",
        icon: "icon ion-md-menu",
        items: [
          {
            label: "Meat",
            items: [{ label: "Meat 1" }, { label: "Meat 2" }]
          },
          {
            label: "Snack",
            items: [
              { label: "Snack 1" },
              { label: "Snack 2" },
              { label: "Snack 3" }
            ]
          },
          {
            label: "Vegetable",
            items: [{ label: "Sub Product 1" }, { label: "Sub Product 2" }]
          }
        ]
      },
      {
        label: "Gallery",
        icon: "icon ion-md-images"
      },
      {
        label: "Panel",
        icon: "icon ion-md-apps"
      }
    ];

    this.headerItems = [
      {
        label: "Logout",
        icon: "icon ion-md-log-out"
      },
      {
        label: "Home",
        icon: "icon ion-md-home"
      },
      {
        label: "Settings",
        icon: "icon ion-md-settings"
      }
    ];

    this.single = [
      {
        "name": "Germany",
        "value": 8940000
      },
      {
        "name": "USA",
        "value": 5000000
      },
      {
        "name": "France",
        "value": 7200000
      },
      {
        "name": "China",
        "value": 6380000
      },
      {
        "name": "Britain",
        "value": 4520000
      },
      {
        "name": "Japan",
        "value": 9270000
      }
    ];

    this.multi = [
      {
        "name": "Germany",
        "series": [
          {
            "name": "2010",
            "value": 7300000
          },
          {
            "name": "2011",
            "value": 8940000
          }
        ]
      },

      {
        "name": "USA",
        "series": [
          {
            "name": "2010",
            "value": 7870000
          },
          {
            "name": "2011",
            "value": 8270000
          }
        ]
      },

      {
        "name": "France",
        "series": [
          {
            "name": "2010",
            "value": 5000002
          },
          {
            "name": "2011",
            "value": 5800000
          }
        ]
      }
    ];

    this.bubble = [
      {
        "name": "Germany",
        "series": [
          {
            "name": "2010",
            "x": 40632,
            "y": 80.3,
            "r": 80.4
          },
          {
            "name": "2000",
            "x": 36953,
            "y": 80.3,
            "r": 78
          },
          {
            "name": "1990",
            "x": 31476,
            "y": 75.4,
            "r": 79
          }
        ]
      },
      {
        "name": "USA",
        "series": [
          {
            "name": "2010",
            "x": 49737,
            "y": 78.8,
            "r": 310
          },
          {
            "name": "2000",
            "x": 45986,
            "y": 76.9,
            "r": 283
          },
          {
            "name": "1990",
            "x": 3706,
            "y": 75.4,
            "r": 253
          }
        ]
      },
      {
        "name": "France",
        "series": [
          {
            "name": "2010",
            "x": 36745,
            "y": 81.4,
            "r": 63
          },
          {
            "name": "2000",
            "x": 34774,
            "y": 79.1,
            "r": 59.4
          },
          {
            "name": "1990",
            "x": 29476,
            "y": 77.2,
            "r": 56.9
          }
        ]
      },
      {
        "name": "United Kingdom",
        "series": [
          {
            "name": "2010",
            "x": 36240,
            "y": 80.2,
            "r": 62.7
          },
          {
            "name": "2000",
            "x": 32543,
            "y": 77.8,
            "r": 58.9
          },
          {
            "name": "1990",
            "x": 26424,
            "y": 75.7,
            "r": 57.1
          }
        ]
      }
    ];

    this.multiCurve = [
      {
        "name": "Germany",
        "series": [
          {
            "name": "2010",
            "value": 7300000
          },
          {
            "name": "2011",
            "value": 8940000
          },
          {
            "name": "2016",
            "value": 8933233
          },
          {
            "name": "2020",
            "value": 10232311
          }
        ]
      },

      {
        "name": "USA",
        "series": [
          {
            "name": "2010",
            "value": 7870000
          },
          {
            "name": "2011",
            "value": 8270000
          },
          {
            "name": "2016",
            "value": 4332223
          },
          {
            "name": "2020",
            "value": 8934223
          }
        ]
      },

      {
        "name": "France",
        "series": [
          {
            "name": "2010",
            "value": 5000002
          },
          {
            "name": "2011",
            "value": 5800000
          },
          {
            "name": "2016",
            "value": 7870000
          },
          {
            "name": "2020",
            "value": 2223232
          }
        ]
      }
    ];
  }

  onSelect(event) {
    console.log(event);
  }

  clicked() {
    alert("test");
  }

  test(event) {
    console.log(event);
  }

  numberOnly() {
    
  }
}
