import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(todos: Todo[], filtro: string): Todo[] {
    // console.log('value', value);
    // return value ;
    switch( filtro ) {
      case 'completados':
        return todos.filter(todo => todo.completado);
      case 'pendientes':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }

  }

}
