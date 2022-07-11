export const ITEM_ACTIONS = {
  ITEM_REMOVED: 'ITEM_REMOVED',
  ITEM_PRICE_UPDATED: 'ITEM_PRICE_UPDATED',
  ITEM_QTY_UPDATED: 'ITEM_QTY_UPDATED',
  ITEM_ADDED: 'ITEM_ADDED'
};

export const addNewItem = (name, price) => ({
  type: ITEM_ACTIONS.ITEM_ADDED,
  payload: {
    name,
    price
  }
});

export const removeItem = (uuid) => ({
  type: ITEM_ACTIONS.ITEM_REMOVED,
  payload: uuid
});

export const updatePrice = (uuid, price) => ({
  type: ITEM_ACTIONS.ITEM_PRICE_UPDATED,
  payload: {
    uuid,
    price
  }
});

export const updateQuantity = (uuid, quantity) => ({
  type: ITEM_ACTIONS.ITEM_QTY_UPDATED,
  payload: {
    uuid,
    quantity
  }
});
