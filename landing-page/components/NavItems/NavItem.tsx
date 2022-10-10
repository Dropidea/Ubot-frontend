import React from 'react'

function NavItem({ dest, children }) {
    return (
        <li>
            <a href={dest}>{children}</a>
        </li>
    )
}

export default NavItem