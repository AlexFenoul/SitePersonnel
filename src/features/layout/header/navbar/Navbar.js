import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {  } from 'react-redux';
import {  } from './navbarSlice';
import styles from './Navbar.module.css';




export function Navbar() {
    const [navBarItem, setnavbarItem] = useState(['About Me', 'Portfolio', 'CV']);

    function handleChangeNav(navItem){
        navItem === 'accueil' ?  setnavbarItem(['about-me', 'portfolio', 'cv']) : setnavbarItem([navItem, 'accueil']) 
    }

  return (
    <div className={styles.navbar}>
        <ul className={styles.list}>
            {
                navBarItem.map((item, index) => {          
                    return ( 
                        <Link className={styles.link} to={"/" + item}><li key={index}><button onClick={() => {handleChangeNav(item)}} className={styles.button + ' primaryColor'} >{item}</button></li></Link>  
                    ) 
                })
            }

        </ul>
    </div>
  );
}
