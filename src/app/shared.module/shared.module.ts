import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../components/message/message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MessageComponent],
  declarations: [MessageComponent]
})
export class SharedModule { }
