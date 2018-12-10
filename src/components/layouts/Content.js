import React from 'react';
import styled from 'styled-components';

export default ({ children }) => <Content>{children}</Content>;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 155px);
  grid-area: content;
  background: whitesmoke;
  padding: 20px;
`;
