import { Component, OnInit, AfterContentChecked } from '@angular/core';

import * as shape from 'd3-shape';

import {GridOptions} from 'ag-grid-community';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterContentChecked {

  windowResized: boolean = false;
  inputBoxVal = '';
  public gridOptions: GridOptions;
  text: string;

  colorScheme = {
    domain: ['#d34992', '#ef8e63', '#32baee', '#B849D3', '#2f8da4', '#ff951e']
  };
  curve = shape.curveBasis;
  eraPaid: any[];
  issuePie: any[];

  constructor() {
    this.gridOptions = <GridOptions>{};
  }

  ngOnInit() {
    this.issuePie = [
      {
        "name": "Vitamin",
        "value": 5400
      },
      {
        "name": "Nutrition",
        "value": 4940
      },
      {
        "name": "Banana",
        "value": 6723
      },
      {
        "name": "Soup",
        "value": 3895
      }
    ];

    this.eraPaid = [ {
      "name": "Carbon Revenue",
        "series": [
        {
          "name": "SUN",
          "value": 3440
        },
        {
          "name": "MON",
          "value": 5400
        },
        {
          "name": "TUE",
          "value": 8600
        },
        {
          "name": "WED",
          "value": 6880
        },
        {
          "name": "THU",
          "value": 6220
        },
        {
          "name": "FRI",
          "value": 5620
        },
        {
          "name": "SAT",
          "value": 7270
        }
      ] },

      {
        "name": "Nutrient Revenue",
          "series": [
          {
            "name": "SUN",
            "value": 6440
          },
          {
            "name": "MON",
            "value": 8400
          },
          {
            "name": "TUE",
            "value": 2900
          },
          {
            "name": "WED",
            "value": 5880
          },
          {
            "name": "THU",
            "value": 6720
          },
          {
            "name": "FRI",
            "value": 3620
          },
          {
            "name": "SAT",
            "value": 6370
          }
        ] },

        {
          "name": "Vitamin Revenue",
            "series": [
            {
              "name": "SUN",
              "value": 4440
            },
            {
              "name": "MON",
              "value": 2500
            },
            {
              "name": "TUE",
              "value": 2100
            },
            {
              "name": "WED",
              "value": 5480
            },
            {
              "name": "THU",
              "value": 3220
            },
            {
              "name": "FRI",
              "value": 1720
            },
            {
              "name": "SAT",
              "value": 870
            }
          ] }
    ];
  }

  ngAfterContentChecked() {
    if(!this.windowResized) {
      this.windowResized = true;
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 0);
    }
  }

  onSelect(event) {
    //console.log(event);
  }
  
}
