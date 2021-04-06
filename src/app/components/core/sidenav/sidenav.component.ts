import { Component, ElementRef, OnInit, ViewChild, Input, AfterViewInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

import { ThemeService } from "../../../_services/theme.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],

  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ transform: "scaleY(0)", transformOrigin: "top", opacity: "0", height: "0" }),
        animate("300ms", style({ transform: "scaleY(1)", opacity: "1", height: "*" }))
      ]),
      transition(":leave", [
        style({ transform: "scaleY(1)", transformOrigin: "top", opacity: "1", height: "*" }),
        animate("300ms", style({ transform: "scaleY(0)", opacity: "0", height: "0" }))
      ]),
    ]),
    trigger("navAnimation", [
      state(
        "inactive",
        style({
          transform: "translateX(-{{width}}rem)",
          marginRight: "-{{width}}rem",
          width: "{{width}}rem"
        }), {params: {width: 25}}
      ),
      state(
        "active",
        style({
          transform: "translateX(0)",
          marginRight: 0,
          width: "{{width}}rem"
        }), {params: {width: 25}}
      ),
      transition("inactive => active", animate("500ms ease-in")),
      transition("active => inactive", animate("500ms ease-out"))
    ]),
    trigger("navIconAnimation", [
      state(
        "inactive",
        style({
          transform: "translateX(-{{width}}rem)"
        }), {params: {width: 25}}
      ),
      state(
        "active",
        style({
          transform: "translateX(0)"
        })
      ),
      transition("inactive => active", animate("500ms ease-in")),
      transition("active => inactive", animate("500ms ease-out"))
    ])
  ]
})

export class SidenavComponent implements OnInit, AfterViewInit {
  selectedItem: string = '';
  selectedRoot: string = '';
  navState: any;
  initialWidth: number;
  navChecked: boolean = true;

  @Input() width: number = 25;
  @Input() showNavIcon: boolean = true;
  @Input() showBadge: boolean = true;
  @Input() showNavHeader: boolean = true;
  @Input() showNavFooter: boolean = true;
  @Input() items: any[] = [];

  @ViewChild('navigationDiv') navigationElementRef: ElementRef;
  @ViewChild('sidenavDiv') sidenavElementRef: ElementRef;

  isSlimSidenav: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.navState = {value: 'active', params: {width: this.width}};
    this.initStatus(this.items);
    this.initialWidth = this.width;
  }

  ngAfterViewInit() {
    if(this.width !== 25) {
      this.navigationElementRef.nativeElement.style.left = this.width + 2 + 'rem';
    }
  }

  initStatus(items) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].items) {
        this.initStatus(items[i].items);
      }
      items[i].open = false;
    }
  }

  toggleExpand(item) {
    if (item.items) {
      if (item.open) {
        item.open = false;
        this.initStatus(item.items);
      } else {
        item.open = true;
      }
    } else {
      this.selectedItem = item.label;
    }
  }

  slimToggleExpand(item, root) {
    if (item.items) {
      if (item.open) {
        item.open = false;
        //this.initStatus(item.items);
      } else {
        item.open = true;
      }
    } else {
      this.selectedItem = item.label;
      this.selectedRoot = item.label;
      if(root) {
        this.slimToggleExpand(root, null);
        this.selectedRoot = root.label;
      }
    }
  }
  
  slimToggleHover(item) {
    if (item.items) {
      if (item.open) {
        item.open = false;
      } else {
        item.open = true;
      }
    }
  }

  toggleNav(event) {
    event.stopPropagation();
    this.navChecked = !this.navChecked;
    const state = this.navState.value  === "active" ? "inactive" : "active";
    this.navState = {value: state, params: {width: this.width}};
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300); // needed for ngx-chart to resize, wait until animation finished
  }

  toggleSlimMenu(event?) {
    if(event) {
      event.preventDefault();
    }
    this.isSlimSidenav = !this.isSlimSidenav;
    if(this.isSlimSidenav) {
      this.initStatus(this.items);
      this.navigationElementRef.nativeElement.style.left = '8rem';
      this.width = 6; //width of slim menu
      this.navState = {value: 'active', params: {width: this.width}};
    } else {
      this.navigationElementRef.nativeElement.style.left = this.initialWidth + 2 + 'rem';
      this.width = this.initialWidth;
      this.navState = {value: 'active', params: {width: this.width}};
    }
    window.dispatchEvent(new Event('resize'));
  }

  setActive(target: string) {
    this.selectedItem = target;
  }

  //just a test for changing theme dynamically, actual code should be put on a more suitable place, e.g: header
  changeTheme() {
    let colors = [{'primary': 'red', 'primaryRgb': '255, 0, 0'}, {'primaryDark': 'green', 'primaryDarkRgb': '0, 255, 0'}, {'primaryDark2': 'blue', 'primaryDarkRgb2': '0, 0, 255'}];
    this.themeService.changeTheme(colors);
  }
}
