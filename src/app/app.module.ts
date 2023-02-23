import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule,
    RouterModule.forRoot(
      [
        {path: 'home-screen', component: HomeScreenComponent},
        {path: 'parameters-screen', component: ParametersScreenComponent},
        {path: 'result-screen', component: ResultScreenComponent}
      ]
    ),
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
