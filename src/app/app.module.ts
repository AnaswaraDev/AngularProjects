import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule }  from './todo/todo.module';
import { TasksComponent } from './tasks/tasks.component';
import { NgModelModule}  from './ng-model/ng-model.module';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    NgModelModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
