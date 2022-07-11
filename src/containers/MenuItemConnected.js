import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MenuItem } from '../components/MenuItem';
import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';
import { selectItemTotal } from '../store/items/selectors';

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      updatePrice: (price) => updatePrice(ownProps.uuid, price),
      updateQuantity: (qty) => updateQuantity(ownProps.uuid, qty),
      remove: () => removeItem(ownProps.uuid)
    },
    dispatch
  );
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
//     updateQuantity: (qty) => dispatch(updateQuantity(ownProps.uuid, qty)),
//     remove: () => dispatch(removeItem(ownProps.uuid))
//   };
// };

const mapStateToProps = (state, props) => {
  const total = selectItemTotal(state, props);

  return { total };
};

export const MenuItemConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
