import React from 'react';
import styled from 'styled-components';

export default () => <Header>People Insight</Header>;

const Header = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  height: 100px;
  background: wheat;
  font-size: 20px;
  padding: 10px;
`;
