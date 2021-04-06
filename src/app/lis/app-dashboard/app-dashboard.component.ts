import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.scss']
})
export class AppDashboardComponent implements OnInit, AfterViewInit {

  actives: any[] = [];
  options: any[] = [];

  rankings: any[] = [];

  colorSchemeFood = {
    domain: ['#826bdd','#6cd1b7']
  };
  colorSchemeNutrients = {
    domain: ['#d971a5', '#ef8e63']
  };
  colorSchemeNutrientsLeast = {
    domain: ['#d971a5', '#ddd']
  };

  consumedFood: any[] = [];
  top5Nutrients: any[] = [];
  last5Nutrients: any[] = [];

  progressBarContainerSize: number = 0;

  @ViewChild('chartContainer') chartContainerElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
    this.options = ['daily', 'weekly', 'monthly'];
    this.actives = [this.options[0], this.options[0], this.options[0], this.options[0], this.options[0]];
    this.rankings = [
      {name: 'Sonya Sun', email: 'sonyasun87@gmail.com'},
      {name: 'Ye Yuan', email: 'sonyasun87@gmail.com'},
      {name: 'Bei Kang', email: 'sonyasun87@gmail.com'},
      {name: 'Ye Yuan', email: 'sonyasun87@gmail.com'},
      {name: 'Ye Yuan', email: 'sonyasun87@gmail.com'},
      {name: 'Ye Yuan', email: 'sonyasun87@gmail.com'},
      {name: 'Ye Yuan', email: 'sonyasun87@gmail.com'},
      {name: 'Ye Yuan', email: 'sonyasun87@gmail.com'},
      {name: 'Ye Yuan', email: 'sonyasun87@gmail.com'},
      {name: 'Ye Yuan', email: 'sonyasun87@gmail.com'}
    ];

    this.consumedFood = [
      {
        "name": "Tomato Sauce",
        "value": 2340
      },
      {
        "name": "Mustard",
        "value": 7400
      },
      {
        "name": "Barbecue sauce",
        "value": 6600
      },
      {
        "name": "Red-wine vinegar",
        "value": 4980
      },
      {
        "name": "Salsa",
        "value": 6520
      },
      {
        "name": "Salmon",
        "value": 3570
      },
      {
        "name": "Halibut",
        "value": 5570
      },
      {
        "name": "Trout",
        "value": 7920
      },
      {
        "name": "mackeret",
        "value": 1567
      }
    ];

    this.top5Nutrients = [
      {
        "name": "Iron",
        "value": 340
      },
      {
        "name": "Magnesium",
        "value": 400
      },
      {
        "name": "Vitamin B",
        "value": 600
      },
      {
        "name": "Vitamin D",
        "value": 880
      },
      {
        "name": "Vitamin K",
        "value": 520
      }
    ];

    this.last5Nutrients = [
      {
        "name": "Multivitamins",
        "series": [
          {
            "name": "amount", 
            "value": 180
          },
          {
            "name": "target gap", 
            "value": 320
          }
        ]
      },
      {
        "name": "Vitamin K",
        "series": [
          {
            "name": "amount", 
            "value": 60
          },
          {
            "name": "target gap", 
            "value": 440
          }
        ]
      },
      {
        "name": "DHEA",
        "series": [
          {
            "name": "amount", 
            "value": 20
          },
          {
            "name": "target gap", 
            "value": 480
          }
        ]
      },
      {
        "name": "Fatty Acid",
        "series": [
          {
            "name": "amount", 
            "value": 120
          },
          {
            "name": "target gap", 
            "value": 380
          }
        ]
      },
      {
        "name": "Probiotics",
        "series": [
          {
            "name": "amount", 
            "value": 300
          },
          {
            "name": "target gap", 
            "value": 200
          }
        ]
      }
    ];
  }

  toggleActive(idx, active) {
    this.actives[idx] = active;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      let element = this.chartContainerElementRef.nativeElement;
      this.progressBarContainerSize = Math.min(element.offsetWidth, element.offsetHeight);
    });
  }

  onResize(event) {
    setTimeout(() => {
      let element = this.chartContainerElementRef.nativeElement;
      this.progressBarContainerSize = Math.min(element.offsetWidth, element.offsetHeight);
    }, 300);
  }

}
