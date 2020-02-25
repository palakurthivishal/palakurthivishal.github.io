import React, { useContext } from 'react';
import ProfileContext from '../../components/ProfileProvider';
import styled from 'styled-components';

const Avatar = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`;

const Intro = styled.p`
  font-style: italic;
`;

export default function Bio(props) {
  const { bio } = useContext(ProfileContext);

  return (
    <div>
      <Avatar src={bio.avatar} />
      <h1>{bio.name}</h1>
      <Intro>{bio.intro}</Intro>
    </div>
  );
}
