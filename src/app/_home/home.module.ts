import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { VideoModule } from "../_directive/video/video.module";
import { LisModule } from '../lis/lis.module';
import { ModalModule } from "../components/core/modal-popup/modal.module";
import { SetDimensionByViewportModule } from '../_directive/set-dimension-by-viewport/set-dimension-by-viewport.module';

import { ScrollbarModule  } from "ngx-scrollbar";

@NgModule({
  imports: [CommonModule, VideoModule, FormsModule, LisModule, ScrollbarModule, ModalModule.forChild(), SetDimensionByViewportModule ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
