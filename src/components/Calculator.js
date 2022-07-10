import { Card } from '@twilio-paste/core';
import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';
import { SummaryConnected } from '../containers/SummaryConnected';
import { TipSelectContainer } from '../containers/TipSelectContainer';

const Calculator = () => {
  return (
    <Card>
      <NewItemFormContainer />
      <MenuItemsContainer />
      <TipSelectContainer />
      <SummaryConnected />
    </Card>
  );
};

export default Calculator;
