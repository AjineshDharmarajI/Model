import React from 'react'
import './NavBar.css'
import Table from './Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear,faUser } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    return (
        <div className='full'>
        <nav className='navbar'>
            <div className='  Main'>
                <div>
                    <ul className='navbar-nav'>
                        <a className='navbar-brand m-0 p-0' href='#'>
                            <p className='m-0'>LEGAL INDIA</p>
                        </a>

                        <li className='navbar-item'>
                            <a className='navbar-link' href='#'> Leads</a>
                        </li>

                        <li className='navbar-item'>
                            <a className='navbar-link' href='#'> Pages</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='navbar-nav bottom'>
                    <li className='navbar-item'>
                           
                            <a className='navbar-link' href='#'><FontAwesomeIcon icon={faGear}/> Log Out</a>
                        </li>
                    </ul>
                </div>

            </div>
            


       
        <nav className='navbar-horizontal'>
            <div></div>
            <div className='horizontal-right'>
                <ul className='navbar-nav flex-row'>
                    <li className='nav-item '>
                        <a className='nav-link px-4' href='#'><FontAwesomeIcon icon={faUser} className='User-icon'/>Name</a>
                    </li>
                </ul>
                </div>
            </nav>
           
        
            
            </nav>
        <Table/>
        </div>
    )
}

export default NavBar