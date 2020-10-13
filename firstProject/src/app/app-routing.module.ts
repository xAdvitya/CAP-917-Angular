import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaComponent } from './ca/ca.component';
import { Header } from './header/head.component';


const routes: Routes = [
  // {path:'',component:Header},
  { path: 'ca', component: CaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
