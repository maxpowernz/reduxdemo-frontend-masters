import { createSelector } from 'reselect';

//base selectors that takes in state

/** base selecter */
export const selectItems = (state) => state.items;

/** Base select item
 * @param {Object} state - Redux state
 */
export const selectItem = (state, props) =>
  state.items.find((item) => item.uuid === props.uuid);

export const selectTipPercentage = (state) => state.tipPercentage;

/** Select Sub Total
 * @param {Function} selectItems - Base selector
 */
export const selectSubTotal = createSelector([selectItems], (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export const selectTipAmount = createSelector(
  [selectSubTotal, selectTipPercentage],
  (subtotal, tipPercentage) => (subtotal * tipPercentage) / 100
);

export const selectTotal = createSelector(
  [selectSubTotal, selectTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);

export const selectItemTotal = createSelector(
  [selectItem],
  (item) => item.quantity * item.price
);
