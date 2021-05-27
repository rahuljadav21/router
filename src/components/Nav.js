import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    const navStyle = {
        color : 'white',
        textDecoration : 'none'
    }
    return (

        <nav>
            <Link to='/' style={navStyle}><h3>Logo</h3></Link>
            
            <ul className='nav-link'>
                <Link to='/about' style={navStyle}> <li>About</li> </Link>
                <Link to='/Shop' style={navStyle}> <li>Shop</li> </Link>
                
            </ul>

        </nav>

    )
}

export default Nav
