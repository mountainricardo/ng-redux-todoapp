import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model'

export const initialState: Todo[] = [
  new Todo('Salvar las esencias'),
  new Todo('Morir por la patria'),
  new Todo('Rezar un rosario a la Magdalena')
];

const _todoReducer = createReducer(
  initialState,
  on(actions.crearTodo, (state, { texto }) => [...state, new Todo( texto )]),

  on(actions.limpiarTodos, (state) => state.filter(todo => !todo.completado)),

  on(actions.borrarTodo, (state, { id }) => state.filter(el => el.id !== id) ),

  on(actions.toggleTodo, (state, { id }) => {
    return state.map( todo => {
      if ( todo.id === id ) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }

    });
  }),
  on(actions.editarTodo, (state, { id, texto }) => {
    return state.map( todo => {
      if ( todo.id === id ) {
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }

    });
  }),
  on(actions.toggleAll, (state, { completado }) => {
    return state.map( todo => {
      return {
        ...todo,
        completado: completado
      }

    });
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
