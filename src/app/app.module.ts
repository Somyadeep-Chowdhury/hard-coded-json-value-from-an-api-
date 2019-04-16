import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavComponent } from './nav/nav.component';
import { ArticlesComponent } from './articles/articles.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatCardModule, MatInputModule, MatSelectModule, MatListModule, MatSidenavModule, MatChipsModule, MatDialogModule, MatNativeDateModule, MatDatepickerModule, MatRadioModule} from '@angular/material';

import 'hammerjs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SuggestComponent } from './suggest/suggest.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AboutComponent } from './about/about.component';
import { ViewSuggestionsComponent } from './view-suggestions/view-suggestions.component';
import { MyServiceService } from './my-service.service';
import { ApiComponent } from './api/api.component';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    // NavComponent,
    ArticlesComponent,
    SuggestComponent,
    AboutComponent,
    ViewSuggestionsComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatChipsModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
