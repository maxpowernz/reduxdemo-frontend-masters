import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import {
  selectSubTotal,
  selectTipAmount,
  selectTotal
} from '../store/items/selectors';

const mapStateToProps = (state) => {
  const subtotal = selectSubTotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTotal(state);

  return { subtotal, tipAmount, total };
};

export const SummaryConnected = connect(mapStateToProps)(Summary);
