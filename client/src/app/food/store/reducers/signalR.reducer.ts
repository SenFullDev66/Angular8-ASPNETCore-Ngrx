import { Action } from '@ngrx/store';

import { FoodItem } from '../../../shared/models/foodItem.model';
import * as foodActions from '../actions/food.actions';
import { FoodState, initialState } from './food.reducer';

export function signalRReducer(
  state = initialState,
  action: foodActions.FoodActions
): FoodState {
  switch (action.type) {
    case foodActions.RECEIVED_FOOD_ADDED: {
      if (!!state.entities[action.foodItem.id]) {
        return state;
      }

      const foodItem = action.foodItem;
      const entities = {
        ...state.entities,
        [foodItem.id]: foodItem
      };

      return {
        ...state,
        entities
      };
    }

    case foodActions.RECEIVED_FOOD_DELETED: {
      if (!state.entities[action.foodId]) {
        return state;
      }

      const { [action.foodId]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities
      };
    }

    case foodActions.RECEIVED_FOOD_UPDATED: {
      const foodItem = action.foodItem;

      const entities = {
        ...state.entities,
        [foodItem.id]: foodItem
      };

      return {
        ...state,
        entities
      };
    }

    default:
      return state;
  }
}
