import React from 'react';

/**
 * 
import avatar from '../../img/avatar.png';

import dbs from '../../img/dbs.png';
import innominds from '../../img/innominds.png';

import linkedin from '../../img/linkedIn.png';
import facebook from '../../img/facebook.png';
import twitter from '../../img/twitter.png';
 */

const data = {
  bio: {
    avatar: 'https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg',
    name: 'Vishal Goud Palakurthi',
    role: 'UI Engineer',
    intro: `Predominantly, I'm a Web User Interface engineer who codes in HTML/CSS/JS but in my leisure I step out to see which direction the world is heading. I enjoy programming as long as there is a problem to solve. I enjoy building interfaces due to it's intricacies and also because it is the first thing the customer interacts with.`
  },
  skills: {
    web: [
      {
        name: 'HTML',
        exp: 7
      },
      {
        name: 'CSS',
        exp: 7
      },
      {
        name: 'JS',
        exp: 7
      }
    ]
  },
  work: {
    orgs: [
      {
        name: 'DBS Asia Hub2 Private Limited',
        logo: 'https://2237ol4ablev3zf0ke2f1083-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/dbs-logo.png',
        location: 'Hyderabad, India',
        duration: 'August 2017 - Present'
      },
      {
        name: 'Innominds Software SEZ India Pvt Ltd',
        logo: 'https://d3lkgw8fmky896.cloudfront.net/qan-logo-a154P000002LYzDQAW.png',
        location: 'Hyderabad, India',
        duration: 'November 2012 - August 2017'
      }
    ]
  },
  contact: {
    mobile: '+91 9010765439',
    email: 'palakurthivishal@gmail.com',
    socialMedia: {
      linkedin: {
        logo: 'https://pngimg.com/uploads/linkedIn/linkedIn_PNG27.png',
        url: 'https://www.linkedin.com/in/vishal-palakurthi-24704b82/'
      },
      facebook: {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
        url: 'http://facebook.com/2340309439363480'
      },
      twitter: {
        logo: 'https://pngimg.com/uploads/twitter/twitter_PNG9.png',
        url: 'https://twitter.com/shhh_vishh'
      }
    }
  }
};

const ProfileContext = React.createContext(data);

export function ProfileProvider(props) {
  return <ProfileContext.Provider value={data}>{props.children}</ProfileContext.Provider>;
}

export default ProfileContext;
