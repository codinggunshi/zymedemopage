import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html',
  styleUrls: ['./protocol.component.scss']
})
export class ProtocolComponent implements OnInit {
  filter: string = 'All';
  originalData: any[];
  summaryData: any[];
  checkAll: boolean = false;
  checkedCount: number = 0;
  checkallIndeterminate: boolean = false;
  numberOfPages: number = 0;
  activePage: number = 0;
  pagesInfo: any[] = [];

  constructor() { }

  ngOnInit() {

    this.summaryData = [
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Bone Health'},
      {dateCreated: 'Feb 26, 2020', status: 'Draft', nameOfProtocol: 'Allergy Relief'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Bone Health'},
      {dateCreated: 'Feb 26, 2020', status: 'Draft', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Cancelled', nameOfProtocol: 'Bone Health'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy Relief'},
      {dateCreated: 'Feb 26, 2020', status: 'Cancelled', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Bei Kang'},
      {dateCreated: 'Feb 26, 2020', status: 'Cancelled', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy Relief'},
      {dateCreated: 'Feb 26, 2020', status: 'Draft', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Bone Health'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Cancelled', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Draft', nameOfProtocol: 'Allergy Relief'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Bei Kang'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy Relief'},
      {dateCreated: 'Feb 26, 2020', status: 'Cancelled', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Bone Health'},
      {dateCreated: 'Feb 26, 2020', status: 'Draft', nameOfProtocol: 'Allergy Relief'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Bone Health'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Cancelled', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Bei Kang'},
      {dateCreated: 'Feb 26, 2020', status: 'Cancelled', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Draft', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy Relief'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Bone Health'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy Relief'},
      {dateCreated: 'Feb 26, 2020', status: 'Cancelled', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Draft', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Bei Kang'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Bone Health'},
      {dateCreated: 'Feb 26, 2020', status: 'Cancelled', nameOfProtocol: 'Allergy Relief'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Allergy'},
      {dateCreated: 'Feb 26, 2020', status: 'Active', nameOfProtocol: 'Bei Kang'}
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

  changeFilter(filter) {
    this.filter = filter;
    //init active page, init summarydata, push original data that satisfies filter to summarydata, recalculate number of pages, reconstruct pagesinfo
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

}
