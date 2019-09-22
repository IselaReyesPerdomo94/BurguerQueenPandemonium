import React, {Component} from 'react'
import './style.css'
import { Link } from '@material-ui/core';

const Menu = () => {
return (
    <div>
        <header>
        <span class="menu"><i class="material-icons">double_arrow</i></span>
        </header>
        <section class="main">
            <aside class="keep">
                <ul>
                    <li>
                        <Link>
                            <span><i class="material-icons">home</i></span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span><i class="material-icons">restaurant</i></span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span><i class="material-icons">assigment</i></span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span><i class="material-icons">attach_money</i></span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span><i class="material-icons">setting_applications</i></span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span><i class="material-icons">account_circle</i></span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </section>   
    </div> 
);
}

export default Menu; 