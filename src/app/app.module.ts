import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BudgetComponent } from './Budget/budget.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import {HttpClientModule} from '@angular/common/http';
import { TransationComponent } from './transation/transation.component';
import { AccountsComponent } from './accounts/accounts.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BudgetComponent,
    TransationComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
