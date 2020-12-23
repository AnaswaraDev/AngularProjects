import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component' ;
import {OrderViewComponent} from './order-view/order-view.component';
const routes: Routes = [ 
  { path : 'learning', component : TasksComponent },
  {path: 'order/:id', component : OrderViewComponent}
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


