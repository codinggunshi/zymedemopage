import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lab-summary',
  templateUrl: './lab-summary.component.html',
  styleUrls: ['./lab-summary.component.scss']
})
export class LabSummaryComponent implements OnInit {

  summaryData: any[];
  checkAll: boolean = false;
  checkedCount: number = 0;
  checkallIndeterminate: boolean = false;
  numberOfPages: number = 0;
  activePage: number = 0;
  pagesInfo: any[] = [];
  showDetail: boolean = false;
  activeDetail: number = 0; //absolute index

  constructor() { }

  ngOnInit() {
    this.summaryData = [
      {testName: 'Micronutrient', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false, 
        details: [
          {panel: 'Total Immunoglobulins', tests: [
            {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
          ]},
          {panel: 'Total Immunoglobulins', tests: [
            {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          ]},
          {panel: 'Lactoglobulin', tests: [
            {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
          ]},
        ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
      ]
      },
      {testName: 'Micronutrient', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Lactalbumin', tests: [
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Micronutrient', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Micronutrient', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
        details: [
          {panel: 'Total Immunoglobulins', tests: [
            {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
          ]},
          {panel: 'Total Immunoglobulins', tests: [
            {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          ]},
          {panel: 'Lactoglobulin', tests: [
            {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
            {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
          ]},
        ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Micronutrient', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Micronutrient', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'N/A', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'qb', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      },
      {testName: 'Wheat Zoomer', risky: 'danger', date: 'Feb 26, 2020', labPerformed: 'va', checked: false,
      details: [
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'β-casein', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 1.12, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
        {panel: 'Total Immunoglobulins', tests: [
          {testName: 'α -Lactalbumin', result: {quantity: 1.38, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
        ]},
        {panel: 'Lactoglobulin', tests: [
          {testName: 'Serum albumin', result: {quantity: 1.98, condition: 'high'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Lactferrin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'ß – Lactoglobulin', result: {quantity: 1.12, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'κ-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'αS1-casein & αS2-casein', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Beta-casomorphin (BCM 7)', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'},
          {testName: 'Serum albumin', result: {quantity: 30.00, condition: 'normal'}, refRange: '22.96-32.27(ng/mL)'}
        ]},
      ]
      }
    ];

    this.numberOfPages = Math.ceil(this.summaryData.length / 10);

    for(let i=0; i<this.numberOfPages; i++) {
      if(i === 0) {
        this.pagesInfo.push({active: true});
      } else {
        this.pagesInfo.push({active: false});
      }
    }
  }

  toggleCheckAll() {
    this.checkAll = !this.checkAll;
    this.checkallIndeterminate = false;
    for(let i=0; i<this.summaryData.length; i++) {
      this.summaryData[i].checked = this.checkAll;
    }
    if(this.checkAll) {
      this.checkedCount = this.summaryData.length;
    } else {
      this.checkedCount = 0;
    }
  }

  toggleCheck(idx) {
    idx = idx + this.activePage * 10;//get true index by relative index in a page
    this.summaryData[idx].checked = !this.summaryData[idx].checked;
    if(this.summaryData[idx].checked) {
      this.checkedCount++;
      if(this.checkedCount === this.summaryData.length) {
        this.checkAll = true;
        this.checkallIndeterminate = false;
      } else {
        this.checkAll = false;
        this.checkallIndeterminate = true;
      }
    } else {
      this.checkedCount--;
      this.checkAll = false;
      if(this.checkedCount === 0) {
        this.checkallIndeterminate = false;
      } else {
        this.checkallIndeterminate = true;
      }
    }
  }

  activatePageByIdx(idx) {
    this.pagesInfo[this.activePage].active = false;
    this.pagesInfo[idx].active = true;
    this.activePage = idx;
  }

  goToFirstPage() {
    this.pagesInfo[this.activePage].active = false;
    this.pagesInfo[0].active = true;
    this.activePage = 0;
  }

  goToLastPage() {
    this.pagesInfo[this.activePage].active = false;
    this.pagesInfo[this.numberOfPages - 1].active = true;
    this.activePage = this.numberOfPages - 1;
  }

  goToNextPage() {
    let idx = this.activePage;
    if(idx !== this.numberOfPages - 1) {
    this.pagesInfo[idx].active = false;
    this.pagesInfo[idx+1].active = true;
    this.activePage = idx + 1;
    }
  }

  goToPreviousPage() {
    let idx = this.activePage;
    if(idx !== 0) {
    this.pagesInfo[idx].active = false;
    this.pagesInfo[idx-1].active = true;
    this.activePage = idx - 1;
    }
  }

  showReport(idx) {
    this.showDetail = true;
    idx = idx + this.activePage * 10;
    this.activeDetail = idx;
  }

  hideReport() {
    this.showDetail = false;
  }

  swithShownDetail(idx) {
    idx = idx + this.activePage * 10;
    this.activeDetail = idx;
  }

}
