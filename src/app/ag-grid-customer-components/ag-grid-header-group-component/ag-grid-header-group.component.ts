import {Component, OnDestroy} from '@angular/core';
import {IHeaderGroupParams} from 'ag-grid-community';
import {IHeaderGroupAngularComp} from 'ag-grid-angular';

@Component({
  templateUrl: './ag-grid-header-group.component.html',
  styleUrls: ['./ag-grid-header-group.component.scss']
})
export class AgGridHeaderGroupComponent implements IHeaderGroupAngularComp {
  public params: any;
  public expanded: boolean;
  public iconClass: string;
  public isExpandable: boolean = false;

  agInit(params: any): void {
    this.iconClass = params.iconClass;
    if(params.isExpandable) {
      this.isExpandable = true;
    }
    this.params = params;
    this.params.columnGroup.getOriginalColumnGroup().addEventListener('expandedChanged', this.onExpandChanged.bind(this));
  }


  expandOrCollapse() {
    this.params.setExpanded(!this.expanded);
  }

  onExpandChanged() {
    this.expanded = this.params.columnGroup.getOriginalColumnGroup().isExpanded();
  }
}
