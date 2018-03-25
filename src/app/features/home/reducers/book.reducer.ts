import { ActionReducer, Action, createFeatureSelector } from '@ngrx/store';

import {BookActionTypes, BookActions} from '../actions';
import { Book } from './../../../share/models';

export interface State {
    isLoading: boolean;
    isLoadSuccess: boolean;
    books: Array<Book>;
}

export const initialState: State = {
    isLoading: false,
    isLoadSuccess: false,
    books: []
};

export function reducer(state: State = initialState, action: BookActions) {
    switch (action.type) {
        case BookActionTypes.Search: {
            return {
              ...state,
              isLoading: true,
              isLoadSuccess: false,
              books: []
            };
        }

        case BookActionTypes.SearchComplete: {
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: true,
                books: action.payload
            };
        }

        case BookActionTypes.SearchError: {
            return {
                ...state,
                isLoading: false,
                isLoadSuccess: false,
                books: []
            };
        }

        default: {
            return state;
        }
            
    }
}

export const getBooks = (state: State) => state.books;