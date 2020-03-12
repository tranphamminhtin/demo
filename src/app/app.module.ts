import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TodoListComponent } from './compoments/todo-list/todo-list.component';
import { TodoItemComponent } from './compoments/todo-item/todo-item.component';
import { TodoIputComponent } from './compoments/todo-input/todo-input.component';
import { HeaderComponent } from './compoments/header/header.component';
import { FooterComponent } from './compoments/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoIputComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
