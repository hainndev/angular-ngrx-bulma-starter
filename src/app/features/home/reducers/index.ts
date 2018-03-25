import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';

/*
export interface State {
    book: fromBook.State;
}*/

export const reducers = {
    book: fromBook.reducer
};
