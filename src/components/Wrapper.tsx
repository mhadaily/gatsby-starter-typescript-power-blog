import styled from 'styled-components';
import { media } from '../utils/media';

export const Wrapper = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${(props) => (props.fullWidth ? '100%' : '100rem')};
  padding: ${(props) => (props.fullWidth ? '0' : '0 6rem')};
  @media ${media.tablet} {
    padding: ${(props) => (props.fullWidth ? '0' : '0 3rem')};
  }
  @media ${media.phone} {
    padding: ${(props) => (props.fullWidth ? '0' : '0 1rem')};
  }
`;
