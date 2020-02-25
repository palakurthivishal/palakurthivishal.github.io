import React from 'react';

const data = {
  bio: {
    avatar: 'https://cdn2.f-cdn.com/contestentries/1316431/24595406/5ae8a3f2e4e98_thumb900.jpg',
    name: 'Vishal Goud Palakurthi',
    role: 'UI Engineer',
    intro: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book`
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
        name: 'Innominds Software SEZ India Pvt Ltd'
      }
    ]
  },
  contact: {
    mobile: '+91 9010765439',
    email: 'palakurthivishal@gmail.com',
    socialMedia: {
      linkedin: {
        logo: 'https://pngimg.com/uploads/linkedIn/linkedIn_PNG27.png',
        url: ''
      },
      facebook: {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
        url: ''
      },
      twitter: {
        logo: 'https://pngimg.com/uploads/twitter/twitter_PNG9.png',
        url: ''
      }
    }
  }
};

const ProfileContext = React.createContext(data);

export function ProfileProvider(props) {
  return <ProfileContext.Provider value={data}>{props.children}</ProfileContext.Provider>;
}

export default ProfileContext;
