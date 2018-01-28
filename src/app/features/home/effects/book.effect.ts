import {
    debounceTime,
    map,
    switchMap,
    skip,
    takeUntil,
    catchError,
  } from 'rxjs/operators';

import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BookActionTypes, Search, SearchComplete, SearchError } from '../actions';

import { BookService } from '../services/book.service';
import { Book } from './../../../share/models';
import { log } from 'util';

@Injectable()
export class SearchBookEffects {

  @Effect() search$: Observable<Action> = this.actions$.pipe(
            ofType<Search>(BookActionTypes.Search),
            map(action => action.payload),
            switchMap(query => {
                if (query === '') {
                  return empty();
                }
                
                return this.bookService$
                  .searchBooks(query)
                  .pipe(
                    map((books: Book[]) => {
                      log(JSON.stringify(books));
                      return new SearchComplete(books);
                    }),
                    catchError(err => of(new SearchError(err)))
                  );
              })
            );

  constructor(
    private actions$: Actions,
    private bookService$: BookService) {}
}