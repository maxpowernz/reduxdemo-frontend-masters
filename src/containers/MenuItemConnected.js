import { connect } from 'react-redux';
import { MenuItem } from '../components/MenuItem';
import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators(
//     {
//       updatePrice: (price) => updatePrice(ownProps.uuid, price),
//       updateQuantity: (qty) => updateQuantity(ownProps.uuid, qty),
//       remove: () => removeItem(ownProps.uuid)
//     },
//     dispatch
//   );
// };

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updatePrice: dispatch((price) => updatePrice(ownProps.uuid, price)),
    updateQuantity: dispatch((qty) => updateQuantity(ownProps.uuid, qty)),
    remove: () => dispatch(removeItem(ownProps.uuid))
  };
};

const mapStateToProps = (state, ownProps) => {
  const total = ownProps.price * ownProps.quantity;
  return { total };
};

export const MenuItemConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
