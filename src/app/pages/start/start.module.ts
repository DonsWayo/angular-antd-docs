import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartComponent } from './start.component';
import { MarkdownModule } from 'ngx-markdown';
import { StartRoutingModule } from './start-routing.module';


@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    StartRoutingModule
  ]
})
export class StartModule { }
