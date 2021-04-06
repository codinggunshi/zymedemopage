import { Component, OnInit, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() style: any;
  @Input() styleClass: string = '';
  @Input() cardContentStyle: string;
  @Input() image: boolean = false;
  @Input() imgUrl: string;

  @ViewChild('imgDiv') imgElementRef: ElementRef;
  @ViewChild('titleDiv') titleElementRef: ElementRef;

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(this.image === true && this.imgUrl !== undefined) {
      this.imgElementRef.nativeElement.style.backgroundImage = 'url("../../../../assets/images/' + this.imgUrl + '")';
      this.titleElementRef.nativeElement.style.borderRadius = '0';
    }
  }

}