import { Component, Renderer2, ElementRef, OnInit, ViewChild, AfterViewInit, Input } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";;

@Component({
  selector: "app-tree",
  templateUrl: "./tree.component.html",
  styleUrls: ["./tree.component.scss"],

  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({
          transform: "scaleY(0)",
          transformOrigin: "top",
          opacity: 0,
          height: 0
        }),
        animate(
          "300ms",
          style({ transform: "scaleY(1)", opacity: 1, height: "*" })
        )
      ]),
      transition(":leave", [
        style({
          transform: "scaleY(1)",
          transformOrigin: "top",
          opacity: 1,
          height: "*"
        }),
        animate(
          "300ms",
          style({ transform: "scaleY(0)", opacity: 0, height: 0 })
        )
      ])
    ])
  ]
})
export class TreeComponent implements OnInit, AfterViewInit {
  @ViewChild("containerDiv")
  treeContainerElementRef: ElementRef;

  @Input()
  width: number;
  @Input()
  height: number;
  @Input()
  propagate: boolean = true;
  @Input()
  items: any[];
  @Input()
  showSearch: boolean = false;

  searchValue: string;
  allExpanded: boolean = false;

  selectedItems: any[] = [];

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    if (this.items) {
      this.initStatus(this.items, true);
    }
  }

  ngAfterViewInit() {
    if (this.width) {
      this.treeContainerElementRef.nativeElement.style.width =
        this.width + "rem";
    }
    if (this.height) {
      this.treeContainerElementRef.nativeElement.style.height =
        this.height + "rem";
    }
  }

  initStatus(items, isInitCheck) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].items) {
        this.initStatus(items[i].items, isInitCheck);
      }
      items[i].open = false;
      if (isInitCheck) {
        items[i].checked = false;
        items[i].indeterminate = false;
      }
    }
  }

  toggleExpand(item) {
    if (item.items) {
      if (item.open) {
        item.open = false;
        this.initStatus(item.items, false);
      } else {
        item.open = true;
      }
      this.allExpanded = false;
    }
  }

  checkboxClicked(event, item) {
    event.stopPropagation(); //prevent trigger parent clicked event
    item.checked = !item.checked;
    if(item.checked) {
      item.indeterminate = false;
    }
    if (this.propagate) {
      this.propagateCheck(item, item.checked);
    }
    this.updateCheckStatus(this.items);
  }

  propagateCheck(item, isChecked) {
    if (item.items) {
      for (var i = 0; i < item.items.length; i++) {
        item.items[i].checked = isChecked;
        this.propagateCheck(item.items[i], isChecked);
      }
    }
  }

  onSearchChange(value) {
    if (value.trim() !== "" && !this.allExpanded) {
      this.expandAll(this.items);
    }
  }

  expandAll(items) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].items) {
        items[i].open = true;
        this.expandAll(items[i].items);
      }
    }
    this.allExpanded = true;
  }

  updateCheckStatus(items) {
    if(!items || items.length === 0) {
      return;
    }
    for(let i=0; i<items.length; i++) {
      this.updateCheckStatus(items[i].items);
      let status = this.getCheckStatus(items[i]);
      if(status === 0) {
        items[i].checked = false;
        items[i].indeterminate  = false;
      }else if(status === 1) { //If a checkbox's state is indeterminate, then it is not checked
        items[i].checked = false;
        items[i].indeterminate = true;
      } else {
        items[i].checked = true;
        items[i].indeterminate = false;
      }
    }
  }

  //return 0 if unchecked, 1 if indeterminate, 2 if checked
  getCheckStatus(item) {
    if(!item.items || item.items.length === 0) {
      if(item.checked) {
        return 2;
      } else {
        return 0;
      }
    }
    let count = 0;
    for(let i=0; i<item.items.length; i++) {
      if(item.items[i].indeterminate) {
        return 1;
      }
      if(item.items[i].checked) {
        count++;
      }
    }
    if(count === 0) {
      return 0;
    } else if(count > 0 && count < item.items.length) {
      return 1;
    } else {
      return 2;
    }
  }
}
