import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component' ;
import {OrderViewComponent} from './order-view/order-view.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import {  ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {  ProductIdComponent} from './product-id/product-id.component';
//import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [ 
  
  {path :'' , redirectTo : 'products', pathMatch :'full'} ,
  {path : 'signin', component : SigninComponent } ,
  { path : 'admin', component: AdminHomeComponent, canActivate : [AdminGuardGuard] },
  { path :  'products', 
       // component : ''
        children : [
          { path : 'view' , component : ProductViewComponent},
          { path : 'edit' , component : ProductEditComponent},
          { path : 'view/:id', component : ProductIdComponent}
          
        ]},
   //{path : 'products' , component : ProductsComponent },
  //{path : 'product-view' , component : ProductViewComponent },
  //{path : 'product-edit' , component : ProductEditComponent},
  {path : 'product/10' , component : ProductIdComponent },//, but ths value is dynamic 

  { path : 'learning', component : TasksComponent },
  {path: 'order/:id', component : OrderViewComponent}, //path in dynamic
  {path : 'search', component : SearchComponent } ,
//{path : '**', component : PageNotFoundComponent}

 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


