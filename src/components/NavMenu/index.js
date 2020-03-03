import React, { useContext } from 'react';
import ProfileContext from '../ProfileProvider';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Menu = styled.ul`
  padding: 0;
  display: flex;
  list-style-type: none;
  justify-content: center;
  font-weight: bold;
`;

const MenuItem = styled.li`
  cursor: pointer;
  color: #ccc;
  font-size: 1.5em;
  margin: 0 16px;
  transition: 0.2s all ease-in;
  border-bottom: 2px solid transparent;

  a,
  a:active,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    color: #4bd21f;
  }
  a.active {
    color: #4bd21f;
    border-bottom: 2px solid #4bd21f;
  }
`;

export default function NavMenu() {
  const data = useContext(ProfileContext);
  const menus = Object.keys(data);
  return (
    <>
      <Menu>
        {menus.map(d => (
          <MenuItem>
            <NavLink to={`/` + d}>{d.toUpperCase()}</NavLink>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
