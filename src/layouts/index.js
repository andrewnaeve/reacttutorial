import React from 'react';
import styled from 'styled-components';

import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Content from '../components/layouts/Content';

export default ({ children }) => (
  <Layout>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Layout>
);

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100%;
`;
