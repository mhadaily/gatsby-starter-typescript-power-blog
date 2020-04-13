import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import { Subline } from './Subline';

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`;

const Title = styled.h2`
  position: relative;
  text-shadow: 0 1.2rem 3rem rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`;

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

interface Props {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  timeToRead: number;
  category: string;
}

const Article = ({ title, date, excerpt, slug, timeToRead, category }: Props) => {
  const firstChar = title.charAt(0);
  return (
    <Post>
      <Title>
        <Initiale>{firstChar}</Initiale>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </Title>
      <Subline>
        {date} &mdash; {timeToRead} Min Read &mdash; In
        <Link to={`/categories/${kebabCase(category)}`}> {category}</Link>
      </Subline>
      <Excerpt>{excerpt}</Excerpt>
    </Post>
  );
};

export { Article };
