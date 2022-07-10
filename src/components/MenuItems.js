import { Stack } from '@twilio-paste/stack';
import React from 'react';
import { MenuItemConnected } from '../containers/MenuItemConnected';

export const MenuItemsFunc = ({ items }) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      {items.map((item) => (
        <MenuItemConnected {...item} key={item.uuid} />
      ))}
    </Stack>
  );
};

export class MenuItems extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <Stack orientation="vertical" spacing="space60">
        {items.map((item) => (
          <MenuItemConnected {...item} key={item.uuid} />
        ))}
      </Stack>
    );
  }
}
