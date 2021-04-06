import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-chip",
  templateUrl: "./chip.component.html",
  styleUrls: ["./chip.component.scss"]
})
export class ChipComponent implements OnInit, AfterViewInit {
  @Input()
  raised: boolean = true;
  @Input()
  clickable: boolean = true;
  @Input()
  hoverable: boolean = true;
  @Input()
  closable: boolean = false;
  @Input()
  label: string;
  @Input()
  text: string = "";
  @Input()
  id: string = "";
  @Output()
  onClose = new EventEmitter();

  @ViewChild("chip")
  chipElementRef: ElementRef;

  show: boolean = true;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.id === "") {
      this.id = this.text;
    }

    if (this.raised) {
      this.chipElementRef.nativeElement.classList.add("chip__raised");
    }
    if (this.clickable) {
      this.chipElementRef.nativeElement.classList.add("chip__clickable");
    }
    if (this.hoverable) {
      this.chipElementRef.nativeElement.classList.add("chip__hoverable");
    }
  }

  removeChip() {
    this.show = false;
    this.onClose.emit(this.id);
  }
}
