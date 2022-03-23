import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
