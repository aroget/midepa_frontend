import { Action } from '@ngrx/store';

export const TOGGLE = 'TOGGLE';

const initialState = {
  isOpen: false,
};

export function mobileReducer(state = initialState, action: Action) {
  switch (action.type) {
    case TOGGLE:
      return Object.assign({}, state, { isOpen: !state.isOpen });

    default:
      return state;
  }
}
