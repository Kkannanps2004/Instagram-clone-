import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='headerAll'>
                <div className='header_logo'>
                    <h1 className='header_logo-text'>Instagram</h1>
                </div>
                <div className='header_nav'>
                    <ul className='header_nav-main header_nav-c'>
                        <li> <h5>  Home           </h5></li>
                        <li> <h5>  Search         </h5></li>
                        <li> <h5>  Explore        </h5></li>
                        <li> <h5>  Reels          </h5></li>
                        <li> <h5>  Messages       </h5></li>
                        <li> <h5>  Notification   </h5></li>
                        <li> <h5>  Create         </h5></li>
                        <li> <h5>  Profile        </h5></li>
                    </ul>
                    <ul className='header_nav-more header_nav-c'>
                        <li>  <h5>  More        </h5> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header