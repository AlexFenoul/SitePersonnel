import React, { useState } from 'react';
import {  } from 'react-redux';
import {  } from './contactSlice';
import styles from './Contacts.module.css';
import MailIcon from '@material-ui/icons/Mail';

export function Contacts() {
  return (
    <div className={styles.contacts}>
        <h2>Contacts</h2>
        <div className={styles.email}>
            <div className="primaryColor"><MailIcon/></div> 
            <a className={styles.linkEmail} href="mailto:alexandre.fenoul@ynov.com">alexandre.fenoul@ynov.com</a>
        </div>
    </div>
  );
}
