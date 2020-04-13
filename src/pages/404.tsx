import React from 'react';
import { Content, Header, Layout, Wrapper } from '../components';
import { Helmet } from 'react-helmet';
import config from '../../config/SiteConfig';
import { Link } from 'gatsby';

export default () => {
  return (
    <Layout>
      <Wrapper>
        <Helmet title={`404 not found | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Content>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Content>
      </Wrapper>
    </Layout>
  );
};
