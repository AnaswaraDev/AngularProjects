import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule }  from './todo/todo.module';
import { TasksComponent } from './tasks/tasks.component';
import { NgModelModule}  from './ng-model/ng-model.module';
import { HighlightPipe } from './highlight.pipe';
import { LocationStrategy ,HashLocationStrategy } from '@angular/common';
import { OrderViewComponent } from './order-view/order-view.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SigninComponent } from './signin/signin.component' ;
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
//import { ReactiveFormsModule }  from '@angular/forms';
import { ReactiveFormsModule }  from '@angular/forms';
import { ObservableComponent } from './observable/observable.component';
import { ContactsComponent } from './contacts/contacts.component';

import { HttpClientModule} from '@angular/common/http';
//import { HttpModule } from '@angular/http';
///import { NgForm }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HighlightPipe,
    OrderViewComponent,
    SearchComponent,
    ProductsComponent,
    ProductViewComponent,
    ProductEditComponent,
    ProductIdComponent,
    PageNotFoundComponent,
    AdminHomeComponent,
    SigninComponent,
    CheckoutComponent,
    ObservableComponent,
    ContactsComponent,
    //ReactiveformComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    FormsModule,
    ReactiveFormsModule,
    NgModelModule,
    HttpClientModule
  
    //NgForm
  ], 
  providers: [
   // {provide :LocationStrategy , useClass :HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
