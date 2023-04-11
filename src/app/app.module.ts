import { HoardScreenComponent } from './hoard-screen/hoard-screen.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ResultScreenComponent } from './result-screen/result-screen.component';
import { ParametersScreenComponent } from './parameters-screen/parameters-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    ResultScreenComponent,
    ParametersScreenComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
