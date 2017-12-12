import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyService } from '../services/buy.service';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from '../components/home/home.component';
import {CardValidationComponent} from '../components/card-validation/card-validation.component';
import {HeaderComponent} from '../components/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared.module/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [HeaderComponent, AppRoutingModule],
  declarations: [HomeComponent, CardValidationComponent, HeaderComponent],
  providers: [BuyService]
})
export class CoreModule { }
