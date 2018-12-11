import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Layout = ({ children }) => <Container>{children}</Container>;

Layout.propTypes = {
  children: PropTypes.object
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 155px);
  grid-area: content;
  background: whitesmoke;
  padding: 20px;
`;

export default Layout;
