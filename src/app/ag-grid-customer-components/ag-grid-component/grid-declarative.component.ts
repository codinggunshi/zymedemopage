import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {GridOptions} from 'ag-grid-community';

import ProficiencyFilter from '../../ag-grid-customer-filters/proficiencyFilter';
import SkillFilter from '../../ag-grid-customer-filters/skillFilter';
import RefData from '../../ag-grid-data-ref/refData';

import {AgGridHeaderGroupComponent} from '../ag-grid-header-group-component/ag-grid-header-group.component';
import {AgGridHeaderComponent} from '../ag-grid-header-component/ag-grid-header.component';
import { DatePickerComponent } from '../../components/core/date-picker/date-picker.component';
import { AddressAutocompleteComponent } from '../../components/core/address-autocomplete/address-autocomplete.component';
import { AgGridInputValidateComponent } from '../ag-grid-cell-component/ag-grid-input-validate.component';
import { TextareaComponent } from "../../components/core/textarea/textarea.component";
import { AgGridDateFilterComponent } from "../../ag-grid-customer-filters/ag-grid-date-filter/ag-grid-date-filter.component";

@Component({
  selector: 'app-ag-grid',
  templateUrl: './grid-declarative.component.html',
  styleUrls: ['./grid-declarative.component.scss']
})
export class GridDeclarativeComponent implements OnInit {

  public gridOptions: GridOptions;
  public showGrid: boolean;
  public rowData: any[];
  public rowCount: string;

  public components = {
    headerGroupComponent: AgGridHeaderGroupComponent,
    DatePickerComponent: DatePickerComponent,
    AddressAutocompleteComponent: AddressAutocompleteComponent,
    InputValidateComponent: AgGridInputValidateComponent,
    TextareaComponent: TextareaComponent,
    agDateInput: AgGridDateFilterComponent
  };

  message: any;
  public countryOptions: any;

  constructor(private router: Router) {
    this.gridOptions = <GridOptions>{};
    this.createRowData();
    this.showGrid = true;
    this.gridOptions.defaultColDef = {
      headerComponentFramework: <{new(): AgGridHeaderComponent}> AgGridHeaderComponent,
      headerComponentParams: {
        menuIcon: 'fa-bars'
      }
    };

    this.countryOptions = {
      values: [
        'Ireland',
        'Spain',
        'United Kingdom',
        'France',
        'Germany',
        'Sweden',
        'Norway',
        'Italy',
        'Greece',
        'Iceland',
        'Portugal',
        'Malta',
        'Brazil',
        'Argentina',
        'Colombia',
        'Peru',
        'Venezuela',
        'Uruguay',
      ]
    };
  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    //params.api.sizeColumnsToFit();
  }

  private createRowData() {
    const rowData: any[] = [];

    for (let i = 0; i < 1000; i++) {
      const countryData = RefData.countries[i % RefData.countries.length];
      rowData.push({
        name: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
        skills: {
          android: Math.random() < 0.4,
          html5: Math.random() < 0.4,
          mac: Math.random() < 0.4,
          windows: Math.random() < 0.4,
          css: Math.random() < 0.4
        },
        dob: RefData.DOBs[i % RefData.DOBs.length],
        address: RefData.addresses[i % RefData.addresses.length],
        years: Math.round(Math.random() * 100),
        proficiency: Math.round(Math.random() * 100),
        country: countryData.country,
        continent: countryData.continent,
        language: countryData.language,
        mobile: this.createRandomPhoneNumber(),
        note: RefData.note[Math.round(Math.random()*8)],
      });
    }

    this.rowData = rowData;
  }

  private calculateRowCount() {
    if (this.gridOptions.api && this.rowData) {
      const model = this.gridOptions.api.getModel();
      const totalRows = this.rowData.length;
      const processedRows = model.getRowCount();
      this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
    }
  }

  public onModelUpdated() {
    this.calculateRowCount();
  }

  private onReady() {
    this.calculateRowCount();
  }

  public onQuickFilterChanged($event) {
    this.gridOptions.api.setQuickFilter($event.target.value);
  }

  public nameCellRenderer(params) {
    const imgNumber = Math.round(Math.random() * 5) + 1;
    const picture =  '<img class="ag-grid-round-image" src="../../../../assets/images/user-' + imgNumber + '.jpg">';

    const eImage = document.createElement('div');
    eImage.className = "div-name-field";
    eImage.style.height = '50%';
    eImage.style.top = '50%';
    eImage.style.transform = 'translate(0, -75%)';
    eImage.style.position = 'absolute';
    eImage.innerHTML = picture;

    const eValue = document.createElement('div');
    eValue.className = 'div-image-field';
    eValue.style.paddingLeft = '4rem';
    eValue.innerHTML = params.value;

    const eOuterDiv = document.createElement('div');
    eOuterDiv.className = 'div-outer-div';
    eOuterDiv.style.position = 'relative';
    eOuterDiv.style.display = 'inline-block';
    eOuterDiv.appendChild(eImage);
    eOuterDiv.appendChild(eValue);

    return eOuterDiv;
  }

  public countryCellRenderer(params) {
    const flag = '<img border=\'0\' width=\'15\' height=\'10\' style=\'margin-bottom: 2px\' src=\'https://www.ag-grid.com/images/flags/'
       + RefData.COUNTRY_CODES[params.value] + '.png\'>';
    return flag + ' ' + params.value;
  }

  public skillsCellRenderer(params) {
    const data = params.data;
    const skills = [];
    RefData.IT_SKILLS.forEach(function(skill) {
      if (data && data.skills && data.skills[skill]) {
        skills.push('<img src="https://www.ag-grid.com/images/skills/' + skill + '.png" width="16px" title="' + skill + '" />');
      }
    });
    return skills.join(' ');
  }

  public percentCellRenderer(params) {
    const value = params.value;
    if(params.value === undefined || params.value === '') {
      const eInvalidValue = document.createElement('div');
      eInvalidValue.className = 'div-invalid-value';
      eInvalidValue.style.color = '#D8000C';
      eInvalidValue.style.fontWeight = '700';
      eInvalidValue.innerHTML = 'Required Field';
      return eInvalidValue;
    }

    const eDivPercentBar = document.createElement('div');
    eDivPercentBar.className = 'div-percent-bar';
    eDivPercentBar.style.width = value + '%';
    eDivPercentBar.style.top = '50%';
    eDivPercentBar.style.transform = 'translate(0, -50%)';
    eDivPercentBar.style.height = '16px';
    eDivPercentBar.style.position = 'absolute';
    if (value < 20) {
      eDivPercentBar.style.backgroundColor = '#FFBABA';
    } else if (value < 60) {
      eDivPercentBar.style.backgroundColor = '#FEEFB3';
    } else {
      eDivPercentBar.style.backgroundColor = '#DFF2BF';
    }

    const eValue = document.createElement('div');
    eValue.className = 'div-percent-value';
    eValue.style.position = 'relative';
    eValue.style.zIndex = '1';
    eValue.innerHTML = value + '%';

    const eOuterDiv = document.createElement('div');
    eOuterDiv.className = 'div-outer-div';
    eOuterDiv.style.position = 'relative';
    eOuterDiv.appendChild(eValue);
    eOuterDiv.appendChild(eDivPercentBar);

    return eOuterDiv;
  }

  public getSkillFilter(): any {
    return SkillFilter;
  }

  public getProficiencyFilter(): any {
    return ProficiencyFilter;
  }

  public getCountryFilterParams(): any {
    return {
      cellRenderer: this.countryCellRenderer,
      cellHeight: 20
    };
  }

  private createRandomPhoneNumber() {
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += Math.round(Math.random() * 9);
    }
    return result;
  }

  public parseDate(params) {
      return pad(params.value.getDate(), 2) + '/' +
      pad(params.value.getMonth() + 1, 2) + '/' +
      params.value.getFullYear();
  }

  public phoneCellRenderer(params) {
    if(params.value === undefined || params.value === '') {
      return '';
    }

    let phoneNumber = '(';
    for(let i=0; i<params.value.length; i++) {
      phoneNumber += params.value[i];
      if(i == 2) {
        phoneNumber += ') ';
      } else if(i == 5) {
        phoneNumber += '-';
      }
    }
    return phoneNumber;
  }

  navigate() {
    this.router.navigateByUrl('/second');
  }
}

// Utility function used to pad the date formatting.
function pad(num, totalStringSize) {
  let asString = num + '';
  while (asString.length < totalStringSize) { asString = '0' + asString; }
  return asString;
}