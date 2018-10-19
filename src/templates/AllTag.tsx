import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { Layout, Wrapper, Header, SectionTitle } from '../components';
import { media } from '../utils/media';

import config from '../../config/SiteConfig';
import PageProps from '../models/PageProps';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`;

export default class AllTagTemplate extends React.PureComponent<PageProps> {
  public render() {
    const { tags } = this.props.pathContext;
    if (tags) {
      return (
        <Layout>
          <Wrapper>
            <Helmet title={`Tags | ${config.siteTitle}`} />
            <Header>
              <Link to="/">{config.siteTitle}</Link>
            </Header>
            <Content>
              <SectionTitle>Tags</SectionTitle>
              {tags.map((tag, index: number) => (
                <Title key={index}>
                  <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
                </Title>
              ))}
            </Content>
          </Wrapper>
        </Layout>
      );
    }
  }
}
