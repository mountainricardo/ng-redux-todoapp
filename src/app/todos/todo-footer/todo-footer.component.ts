import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions'
import { limpiarTodos } from '../../todos/todo.actions'

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual!: string;
  filtros: string[] = ['todos', 'completados', 'pendientes']
  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado).length
    })
  }

  cambiarFiltro(filtro: string) {
    this.store.dispatch(
      actions.setFiltro({ filtro })
    )
  }

  limpiarCompletados() {
    this.store.dispatch(
      limpiarTodos()
    )
  }

}
