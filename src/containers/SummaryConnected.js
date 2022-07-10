import { connect } from 'react-redux';
import { Summary } from '../components/Summary';

const mapStateToProps = (state) => {
  const items = state.items;

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const tipAmount = (subtotal * state.tipPercentage) / 100;

  return { subtotal, tipAmount, total: subtotal + tipAmount };
};

export const SummaryConnected = connect(mapStateToProps)(Summary);
