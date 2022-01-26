import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

//Icons Used
import { AiFillHome } from 'react-icons/ai';
import { IoLogIn } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';

function Sidebar() {
    return (
            //  Basically a big list
            // Each list has an icon
            // and a link that just routes to other pages
            <nav className="sidebar">
                <ul className="sidebar-items">
                    <li className="sidebar-options">
                        <Link to="/" className="sidebar-symbols">
                            <AiFillHome />
                        </Link>
                    </li>
                    <li className="sidebar-options">
                        <Link to="/login" className="sidebar-symbols">
                            <IoLogIn />
                        </Link>
                    </li>

                    <li className="sidebar-options">
                        <Link to="/settings" className="sidebar-symbols">
                            <IoMdSettings />
                        </Link>
                    </li>              
                </ul>
            </nav>

    )
}

export default Sidebar
