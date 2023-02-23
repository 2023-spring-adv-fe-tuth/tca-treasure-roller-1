import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ParametersScreenComponent } from './parameters-screen/parameters-screen.component';
import { ResultScreenComponent } from './result-screen/result-screen.component';

const routes: Routes = [
  {path: '', component: HomeScreenComponent},
  {path: 'parameters-screen', component: ParametersScreenComponent},
  {path: 'result-screen', component: ResultScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
