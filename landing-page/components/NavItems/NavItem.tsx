import React from 'react';
import Link from 'next/link';

function NavItem({ dest, children }) {
  return (
    <li>
      <Link href={dest}>{children}</Link>
    </li>
  );
}

export default NavItem;
