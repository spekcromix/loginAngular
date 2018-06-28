import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatPaginatorModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  	MatButtonModule,
  	MatToolbarModule,
  	MatIconModule,
  	MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  declarations: []
})
export class MaterialModule { }
