import React from 'react';
import styled from 'styled-components';

export default () => <Footer>&copy; Amazon, 2018</Footer>;

const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: skyblue;
  height: 35px;
`;
