import React, { useState } from 'react';
import {  } from 'react-redux';
import {  } from './twitterTimelineSlice';
import styles from './TwitterTimeline.module.css';

import { TwitterTweetEmbed, TwitterFollowButton } from 'react-twitter-embed';

export function TwitterTimeline() {
  return (
    <div className={styles.timeline}>

         <TwitterFollowButton
            screenName={'FenoulAlexandre'}
         />
    </div>
  );
}
