import React, { useState } from 'react';
import {  } from 'react-redux';
import {  } from './footerSlice';
import styles from './Footer.module.css';

import { SocialMedia } from './socialMedia/SocialMedia';
import { Contacts } from './contacts/Contacts';
import { TwitterTimeline } from './twitterTimeline/TwitterTimeline';


export function Footer() {
 

  return (
    <div className={styles.footer}>
        <Contacts></Contacts>
        <SocialMedia></SocialMedia>
        <TwitterTimeline></TwitterTimeline>
    </div>
  );
}
