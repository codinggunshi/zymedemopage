import { Component, Input, OnInit, AfterContentInit, ContentChildren, ViewChild, ViewChildren, QueryList, ElementRef } from "@angular/core";
import { TabComponent } from "../tab/tab.component";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ViewChild('sliderDiv') sliderElementRef: ElementRef;
  @ViewChildren('tabDiv') tabElementList: QueryList<any>;;

  @Input() closable: boolean = false;
  @Input() tabStyle: any;
  @Input() tabClass: string = '';

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab)=>tab.active);
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first, 0, true);
    }
  }
  
  selectTab(tab: TabComponent, idx: number, isInit?: boolean) {
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
    if(!isInit) {
      let offset = 0;
      this.tabElementList.toArray().forEach((element, index) => {
        if(index < idx) {
          offset += element.nativeElement.offsetWidth;
        }
      });
      this.sliderElementRef.nativeElement.style.transform = 'translateX(' + offset + 'px)';
      this.sliderElementRef.nativeElement.style.width = this.tabElementList.toArray()[idx].nativeElement.offsetWidth + 'px';
    }
  }

  closeTab() {
    let idx = -1;
    this.tabs.toArray().forEach((element, index) => {
      if(element.active) {
        idx = index;
        element.active = false; //hide the closed tab
      }
    });
    let arr = this.tabs.toArray();
    arr.splice(idx, 1);
    this.tabs.reset(arr);
    this.selectTab(this.tabs.first, 0);
  }
}
