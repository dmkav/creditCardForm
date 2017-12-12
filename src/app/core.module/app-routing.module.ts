import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {CardValidationComponent} from '../components/card-validation/card-validation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'card-validation', component: CardValidationComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
