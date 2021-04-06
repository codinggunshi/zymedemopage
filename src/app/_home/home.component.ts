import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";

import { ModalService } from '../components/core/modal-popup/modal.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, AfterViewInit {

  offset: number = 0;
  isTop: boolean = true;
  urlParam: string;
  options = {left: 0, top: 1000, duration: 500}

  @ViewChild('scrollbarRef') scrollRef: any;

  constructor(public modalService: ModalService, public changeDetectorRef: ChangeDetectorRef) {
    this.urlParam = window.location.href.split("#")[1];
  }

  ngOnInit() { 
  }

  ngAfterViewInit() {
    if(this.urlParam === 'privacy-policy') {
      this.modalService.getModal('privacyPolicyModal').open();
      this.changeDetectorRef.detectChanges();
    } else if(this.urlParam === 'terms-of-service') {
      this.modalService.getModal('termsOfServiceModal').open();
      this.changeDetectorRef.detectChanges();
    }
  }

  scrollToTop() {
    this.scrollRef.scrollTo(0, 0, 1000).subscribe();
  }
}
