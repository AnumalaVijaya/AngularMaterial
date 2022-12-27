import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{MatCheckboxModule} from '@angular/material/checkbox';
import{ MatButtonModule } from '@angular/material/button';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { SampleformComponent } from './sampleform/sampleform.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    SampleformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
   FormsModule,
   ReactiveFormsModule,
   MatSelectModule,MatRadioModule,
   MatInputModule,MatDatepickerModule,MatNativeDateModule 
  ],
  providers: [MatNativeDateModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
