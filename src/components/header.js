import React from 'react';
import Logo from '../img/domo.svg';

const Header = () => (
    <header>
        <a href="">
            <img class="domo" src={Logo} alt="Domo" />
        </a>
        <nav class="">
            <ul>
                <li><a href="#"></a>OUR AGENCY</li>
                <li><a href="#"></a>HOW TO STAR</li>
                <li><a href="#"></a>BENEFITS</li>
                <li><a href="#"></a>CLIENTS</li>
            </ul>
        </nav>
        <button class="boton-login" type="">LOG IN</button>
        <button class="boton-naranja" type="">SIGN UP</button>
    </header>
);

export default Header;