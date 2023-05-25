import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {


@Input() todo : Todo = new Todo
@Input() i : number = 0
@Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
@Output() todoCheckBox : EventEmitter<Todo> = new EventEmitter();


onClickDelete(todo : Todo) {
  console.log("Todo Want To Delete");
  this.todoDelete.emit(todo)
  
}

onCheckBoxClick (todo : Todo) {
  debugger
  console.log(todo)
  this.todoCheckBox.emit(todo)
  console.log(todo)
}


}
