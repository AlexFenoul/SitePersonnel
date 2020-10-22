import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  } from 'react-redux';
import { selectSocialMedia } from './socialMediaSlice';
import styles from './SocialMedia.module.css';



export function SocialMedia() {
const socialMedias = useSelector(selectSocialMedia);

  return (
    <div className={styles.socialMedia}>
        <h2>Social Media</h2>
        <div>
          {
              socialMedias.map((item, index) => {    
                  const path = require.context('../../../../images', true)
                  let img = path('./' + item.logo);   
                  return ( 
                      <a key={item.id} href={item.url} target="_blank" rel="noreferrer noopener"><img  src={img} alt={item.name} className={styles.logo}/> </a>          
                  ) 
              })
          }
        </div>
    </div>
  );
}
