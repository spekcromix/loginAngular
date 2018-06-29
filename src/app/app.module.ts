import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { DataService } from '../app/data.service';

import { AppComponent } from './app.component';

import { AuthService } from './auth.service';

import { FormsModule } from '@angular/forms';

import { AuthGuard } from './auth.guard';

import { MaterialModule } from './material.module';
import { QuotesComponent } from './quotes/quotes.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { AuthorsComponent } from './authors/authors.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CreateQuoteComponent,
    EditQuoteComponent,
    AuthorsComponent,
    CreateAuthorComponent,
    EditAuthorComponent,
    LoginComponent,
    UsersComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule
  ],
  providers: [DataService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
