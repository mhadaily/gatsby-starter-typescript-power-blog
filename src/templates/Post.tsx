import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { Layout, Wrapper, Header, Subline, SEO, PrevNext } from '../components';
import { media } from '../utils/media';
import config from '../../config/SiteConfig';
import '../utils/prismjs-theme.css';
import PathContext from '../models/PathContext';
import Post from '../models/Post';

const Content = styled.article`
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

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const PostContent = styled.div`
  margin-top: 4rem;
`;

const Hero = styled.div`
  grid-column: 2;
  color: ${props => props.theme.colors.grey.dark};
`;

interface Props {
  data: {
    markdownRemark: Post;
  };
  pathContext: PathContext;
}

export default class PostPage extends React.PureComponent<Props> {
  public render() {
    const { prev, next } = this.props.pathContext;
    const post = this.props.data.markdownRemark;
    return (
      <Layout>
        <Wrapper>
          {post ? (
            <>
              <SEO postPath={post.fields.slug} postNode={post} postSEO />
              <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
              <Header>
                <Link to="/">{config.siteTitle}</Link>
              </Header>
              <Hero>
                <Content>
                  <Title>{post.frontmatter.title}</Title>
                  <Subline>
                    {post.frontmatter.date} &mdash; {post.timeToRead} Min Read &mdash; In{' '}
                    <Link to={`/categories/${kebabCase(post.frontmatter.category)}`}>{post.frontmatter.category}</Link>
                  </Subline>
                  {post.frontmatter.tags ? (
                    <Subline>
                      Tags: &#160;
                      {post.frontmatter.tags.map((tag, i) => (
                        <Link key={i} to={`/tags/${kebabCase(tag)}`}>
                          {tag} {i < post.frontmatter.tags.length - 1 ? `, ` : ``}
                        </Link>
                      ))}
                    </Subline>
                  ) : null}
                  <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
                  <PrevNext prev={prev} next={next} />
                </Content>
              </Hero>
            </>
          ) : null}
        </Wrapper>
      </Layout>
    );
  }
}

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        category
        tags
      }
      timeToRead
    }
  }
`;
