import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LisRoutingModule } from "./lis-routing.module";

import { LisFunctionOneComponent } from "./lis-function-one/lis-function-one.component";
import { LisFunctionOneSubOneComponent } from "./lis-function-one/lis-function-one-sub-one/lis-function-one-sub-one.component";
import { LisFunctionOneSubTwoComponent } from "./lis-function-one/lis-function-one-sub-two/lis-function-one-sub-two.component";
import { LisFunctionTwoComponent } from "./lis-function-two/lis-function-two.component";
import { TableDemoComponent } from "./table-demo/table-demo.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidenavComponent } from "../components/core/sidenav/sidenav.component";
import { FloatNavComponent } from "../components/core/float-nav/float-nav.component";
import { HeaderMenuComponent } from "../components/core/header-menu/header-menu.component";
import { CardComponent } from "../components/core/card/card.component";
import { CardRotatableComponent } from "../components/core/card-rotatable/card-rotatable.component";
import { TextareaComponent } from "../components/core/textarea/textarea.component";
import { TextareaNotebookComponent } from "../components/core/textarea-notebook/textarea-notebook.component";
import { CardHoverableComponent } from "../components/core/card-hoverable/card-hoverable.component";
import { StepBarComponent } from "../components/core/step-bar/step-bar.component";
import { StepBarCircleComponent } from "../components/core/step-bar-circle/step-bar-circle.component";
import { ToastComponent } from "../components/core/toast/toast.component";
import { IconNotificationComponent } from "../components/core/icon-notification/icon-notification.component";
import { DropdownButtonFloatComponent } from "../components/core/dropdown-button-float/dropdown-button-float.component";
import { DatePickerComponent } from "../components/core/date-picker/date-picker.component";
import { AddressAutocompleteComponent } from "../components/core/address-autocomplete/address-autocomplete.component";
import { RadioButtonComponent } from "../components/core/radio-button/radio-button.component";
import { CheckBoxComponent } from "../components/core/check-box/check-box.component";
import { AlertComponent } from "../components/core/alert/alert.component";
import { ButtonFlatComponent } from "../components/core/button-flat/button-flat.component";
import { FileUploadComponent } from "../components/core/file-upload/file-upload.component";
import { ProgressBarComponent } from "../components/core/progress-bar/progress-bar.component";
import { ButtonCircleComponent } from "../components/core/button-circle/button-circle.component";
import { ButtonRoundComponent } from "../components/core/button-round/button-round.component";
import { ButtonStandardComponent } from "../components/core/button-standard/button-standard.component";
import { ButtonArrowComponent } from "../components/core/button-arrow/button-arrow.component";
import { ButtonSlideComponent } from "../components/core/button-slide/button-slide.component";
import { InputFieldComponent } from "../components/core/input-field/input-field.component";
import { InputBoxComponent } from "../components/core/input-box/input-box.component";
import { InputBoxWithbtnComponent } from '../components/core/input-box-withbtn/input-box-withbtn.component';
import { SearchSlideComponent } from "../components/core/search-slide/search-slide.component";
import { InputRoundComponent } from "../components/core/input-round/input-round.component";
import { ListComponent } from "../components/core/list/list.component";
import { TagComponent } from "../components/core/tag/tag.component";
import { AlertFloatComponent } from "../components/core/alert-float/alert-float.component";
import { TreeComponent } from "../components/core/tree/tree.component";
import { ChipComponent } from "../components/core/chip/chip.component";
import { MultiselectDropdownComponent } from "../components/core/multiselect-dropdown/multiselect-dropdown.component";
import { ListFilterPipe } from "../components/core/multiselect-dropdown/list-filter.pipe";
import { TreeFilterPipe } from "../components/core/tree/tree-filter.pipe";
import { FileUploadModule } from "../_directive/file-upload/file-upload.module";
import { ModalModule } from "../components/core/modal-popup/modal.module";
import { ToastModule } from "../_directive/toast/toast.module";
import { ClickOutsideModule } from "../_directive/click-outside/click-outside.module";
import { DraggableModule } from '../_directive/draggable/draggable.module';
import { RippleModule } from '../_directive/ripple/ripple.module';
import { SetDimensionByViewportModule } from '../_directive/set-dimension-by-viewport/set-dimension-by-viewport.module';
import { TabComponent } from "../components/core/tab/tab.component";
import { TabsComponent } from "../components/core/tabs/tabs.component";
import { SwitchComponent } from "../components/core/switch/switch.component";

import { PipeModule } from '../_pipe/pipe.module';
import { FormatCreditCardModule } from '../_directive/format-credit-card/format-credit-card.module';
import { FormatZipCodeModule } from '../_directive/format-zip-code/format-zip-code.module';

import { ScrollbarModule } from "ngx-scrollbar";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { NgxMaskModule } from "ngx-mask";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

//ag grid
import { AgGridModule } from "ag-grid-angular";
import "ag-grid-enterprise";
import { AgGridHeaderComponent } from "../ag-grid-customer-components/ag-grid-header-component/ag-grid-header.component";
import { AgGridHeaderGroupComponent } from "../ag-grid-customer-components/ag-grid-header-group-component/ag-grid-header-group.component";
import { GridDeclarativeComponent } from "../ag-grid-customer-components/ag-grid-component/grid-declarative.component";
import { AgGridInputValidateComponent } from "../ag-grid-customer-components/ag-grid-cell-component/ag-grid-input-validate.component";
import { AgGridDateFilterComponent } from "../ag-grid-customer-filters/ag-grid-date-filter/ag-grid-date-filter.component";

//pages
import { TestReviewComponent } from "./test-review/test-review.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductHomeComponent } from '../lis/product-home/product-home.component';
import { ProductListComponent } from '../lis/product-list/product-list.component';
import { ProductDetailComponent } from '../lis/product-detail/product-detail.component';
import { LabSummaryComponent } from '../lis/lab-summary/lab-summary.component';
import { AppDashboardComponent } from '../lis/app-dashboard/app-dashboard.component';
import { CheckoutComponent } from '../lis/checkout/checkout.component';
import { ProtocolComponent } from '../lis/protocol/protocol.component';
import { NewProtocolComponent } from '../lis/new-protocol/new-protocol.component';
import { CreditCardPipe } from "../_pipe/credit-card.pipe";
import { ZipCodePipe } from "../_pipe/zip-code.pipe";
import { DispensarySettingComponent } from './dispensary-setting/dispensary-setting.component';
import { CheckboxWithimgComponent } from "../components/core/checkbox-withimg/checkbox-withimg.component";
import { CustomizedMultidropdownSearchbarComponent } from '../components/core/customized-multidropdown-searchbar/customized-multidropdown-searchbar.component';

@NgModule({
  declarations: [
    LisFunctionOneComponent,
    LisFunctionOneSubOneComponent,
    LisFunctionOneSubTwoComponent,
    LisFunctionTwoComponent,
    ProductHomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    LabSummaryComponent,
    AppDashboardComponent,
    CheckoutComponent,
    ProtocolComponent,
    NewProtocolComponent,
    TableDemoComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    FloatNavComponent,
    HeaderMenuComponent,
    CardComponent,
    CardRotatableComponent,
    TextareaComponent,
    TextareaNotebookComponent,
    CardHoverableComponent,
    StepBarComponent,
    StepBarCircleComponent,
    ToastComponent,
    IconNotificationComponent,
    DropdownButtonFloatComponent,
    AgGridHeaderComponent,
    AgGridHeaderGroupComponent,
    GridDeclarativeComponent,
    AgGridInputValidateComponent,
    DatePickerComponent,
    AddressAutocompleteComponent,
    AgGridDateFilterComponent,
    RadioButtonComponent,
    CheckBoxComponent,
    AlertComponent,
    ButtonFlatComponent,
    FileUploadComponent,
    TreeComponent,
    ChipComponent,
    MultiselectDropdownComponent,
    ProgressBarComponent,
    ButtonCircleComponent,
    ButtonRoundComponent,
    ButtonStandardComponent,
    ButtonArrowComponent,
    ButtonSlideComponent,
    InputFieldComponent,
    InputBoxComponent,
    InputBoxWithbtnComponent,
    SearchSlideComponent,
    InputRoundComponent,
    ListComponent,
    TagComponent,
    AlertFloatComponent,
    ListFilterPipe,
    LisFunctionOneComponent,
    TestReviewComponent,
    DashboardComponent,
    TreeFilterPipe,
    TabComponent,
    TabsComponent,
    SwitchComponent,
    DispensarySettingComponent,
    CheckboxWithimgComponent,
    CustomizedMultidropdownSearchbarComponent,

  ],
  imports: [
    CommonModule,
    LisRoutingModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxMaskModule.forRoot(),
    GooglePlaceModule,
    ScrollbarModule ,
    AgGridModule.withComponents([
      NgxMaskModule.forRoot(),
      AgGridHeaderComponent,
      AgGridHeaderGroupComponent,
      DatePickerComponent,
      AddressAutocompleteComponent,
      AgGridInputValidateComponent,
      TextareaComponent,
      AgGridDateFilterComponent
    ]),
    FileUploadModule,
    ModalModule.forChild(),
    ToastModule,
    ClickOutsideModule,
    DraggableModule,
    RippleModule,
    SetDimensionByViewportModule,
    PipeModule,
    FormatCreditCardModule,
    FormatZipCodeModule,
    NgxChartsModule,
    CKEditorModule,
  ],
  exports: [ButtonStandardComponent, ButtonRoundComponent, InputBoxComponent],
  providers: [CreditCardPipe, ZipCodePipe],
  entryComponents: [ToastComponent],
})
export class LisModule {}
