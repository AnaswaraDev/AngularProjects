import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component' ;
import {OrderViewComponent} from './order-view/order-view.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [ 
  { path : 'learning', component : TasksComponent },
  {path: 'order/:id', component : OrderViewComponent}, //path in dynamic
  {path : 'search', component : SearchComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


