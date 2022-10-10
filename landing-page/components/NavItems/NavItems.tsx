import React from 'react';
import NavItem from './NavItem';

function NavItems() {
  return (
    <ul>
      <NavItem dest="/">Features</NavItem>
      <NavItem dest="/">How To Use</NavItem>
      <NavItem dest="/">Plans</NavItem>
      <NavItem dest="/">Integrations</NavItem>
    </ul>
  );
}

export default NavItems;
