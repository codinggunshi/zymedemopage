import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';

import { FileUploader } from '../../../_directive/file-upload/file-uploader.class';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit, AfterViewInit {
  flatButtonOptions: any[];

  uploader: FileUploader;
  response: string;

  @Input() height: string = '20rem';

  @ViewChild('uploadButton') btnElementRef: ElementRef;
  @ViewChild('previewContainer') containerElementRef: ElementRef;

  constructor() {

    this.uploader = new FileUploader({
      url: "http://localhost:8080/Billing/uploadTask.do",
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });
    this.response = '';
    this.uploader.response.subscribe( res => this.response = res );
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if(this.height !== '20rem') {
      this.containerElementRef.nativeElement.style.minHeight = this.height;
    }
  }

  public fileOverBase(e:any):void {
  }

  public removeFromUpload(idx) {
    this.uploader.queue.splice(idx, 1);
  }

  public triggerUploadButtonClick() {
    this.btnElementRef.nativeElement.click();
  }

  public updateSrc(event) {
    event.target.src = '../../../assets/images/file-type/txt.png';
  }

  public upload() {
    //to do later: disable 'upload all' button and show upload progress
    this.uploader.uploadAll();
  }

}
