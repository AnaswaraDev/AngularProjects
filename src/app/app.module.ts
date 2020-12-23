import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule }  from './todo/todo.module';
import { TasksComponent } from './tasks/tasks.component';
import { NgModelModule}  from './ng-model/ng-model.module';
import { HighlightPipe } from './highlight.pipe';
import { LocationStrategy ,HashLocationStrategy } from '@angular/common';
import { OrderViewComponent } from './order-view/order-view.component' ;

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HighlightPipe,
    OrderViewComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    NgModelModule
    
  ],
  providers: [
   // {provide :LocationStrategy , useClass :HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
