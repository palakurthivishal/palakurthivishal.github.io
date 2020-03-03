import React, { useContext } from 'react';
import ProfileContext from '../../components/ProfileProvider';
import styled from 'styled-components';

const OrgWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Org = styled.div`
  margin: 16px 0;
  background: #3d3d3b;
  padding: 16px;
  min-width: 330px;
`;

const Logo = styled.img`
  max-height: 45px;
`;

const Italicized = styled.span`
  font-style: italic;
`;

export default function Work(props) {
  const { work } = useContext(ProfileContext);

  return (
    <div>
      <p>Enterprises that I have been with,</p>
      <OrgWrapper>
        {work.orgs.map(d => {
          return (
            <Org>
              <Logo src={d.logo} alt={d.name} />
              <p>
                <Italicized>Location:&nbsp; </Italicized> {d.location}
              </p>
              <p>
                <Italicized>Duration:&nbsp;</Italicized> {d.duration}
              </p>
            </Org>
          );
        })}
      </OrgWrapper>
    </div>
  );
}
