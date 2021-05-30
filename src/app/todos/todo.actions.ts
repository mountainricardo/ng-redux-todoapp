import { createAction, props } from '@ngrx/store';

export const limpiarTodos = createAction(
  '[TODO] Limpia Todos',
);

export const crearTodo = createAction(
  '[TODO] Crea Todo',
  props<{ texto: string}>()
);

export const toggleTodo = createAction(
    '[TODO] Toggle Todo',
    props< {id: number}>()
);

export const editarTodo = createAction(
  '[TODO] Editar Todo',
  props< {id: number, texto: string}>()
);

export const borrarTodo = createAction(
    '[TODO] Borrar Todo',
    props< {id: number}>()
);

export const toggleAll = createAction(
    '[TODO] Toggle All',
    props< {completado: boolean}>()
);
