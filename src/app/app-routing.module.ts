import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntrepotComponent} from "./component/dashboard/entrepot/entrepot.component";

const routes: Routes = [
  {
    path: 'dashboard', children : [
      {path : '', redirectTo: '', pathMatch: "full"},
      {path : 'entrepots', component: EntrepotComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
