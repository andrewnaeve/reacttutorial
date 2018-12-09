import React from 'react';
import styled from 'styled-components';

export default ({ children }) => <Body>{children}</Body>;

const Body = styled.div`
  display: flex;
  flex: 1;
  grid-area: content;
  background-color: whitesmoke;
`;
