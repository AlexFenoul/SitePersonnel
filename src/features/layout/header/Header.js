import React, { useState } from 'react';
import {  } from 'react-redux';
import {  } from './headerSlice';
import styles from './Header.module.css';
import logo from '../../../images/logo.png';

import {Navbar} from './navbar/Navbar'

export function Header() {

  return (
    <div className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo}/>
        <Navbar></Navbar>
    </div>
  );
}
