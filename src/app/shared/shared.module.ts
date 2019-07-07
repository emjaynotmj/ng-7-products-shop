import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import { convertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  declarations: [
    StarComponent,
    convertToSpacesPipe
  ],
  imports: [
  ],
  exports: [
    StarComponent,
    convertToSpacesPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
