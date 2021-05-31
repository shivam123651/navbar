import React from 'react'
import '../index.css'
function NavbarHead()
{
    return(
        <div className='navhead'>
                <div className='image'>
                        <a href='#'> Portfolio </a>
                </div>
                <div class='data'>
                        <a href="#">This Is Me !</a>
                        <a href="#">Projects</a>
                        <a href="#">Qualification</a>
                        <a href="#">Contact me</a>
                        <a href="#">Links</a>
                </div>
        </div>
    );
}

export default NavbarHead;