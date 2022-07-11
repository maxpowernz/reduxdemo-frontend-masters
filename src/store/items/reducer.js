import { ITEM_ACTIONS } from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sandwich', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ACTIONS.ITEM_ADDED) {
    const item = {
      uuid: id++,
      quantity: 1,
      price: parseFloat(action.payload.price),
      name: action.payload.name
    };

    return [...state, item];
  }

  if (action.type === ITEM_ACTIONS.ITEM_REMOVED) {
    const items = state.filter((item) => item.uuid !== action.payload);
    return items;
  }

  if (action.type === ITEM_ACTIONS.ITEM_PRICE_UPDATED) {
    const { payload } = action;

    const items = state.map((item) =>
      item.uuid === payload.uuid ? { ...item, price: payload.price } : item
    );

    return items;
  }

  if (action.type === ITEM_ACTIONS.ITEM_QTY_UPDATED) {
    const { payload } = action;

    const items = state.map((item) =>
      item.uuid === payload.uuid
        ? { ...item, quantity: payload.quantity }
        : item
    );

    return items;
  }

  return state;
};

export default reducer;
