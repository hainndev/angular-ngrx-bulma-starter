import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';


export interface State {
    book: fromBook.State;
}

export const reducers = {
    books: fromBook.reducer
};

//export const selectHomeState = createFeatureSelector<State>('home');

export const selectBookState = (state: State) => state.book;

/*
export const selectBookState = createSelector(
    selectHomeState,
    (state: State) => state.book
); */

export const searchBooks =  createSelector(
    selectBookState,
    (state: fromBook.State) => state.books);