import styled from 'styled-components';
import { rgba } from 'polished';

interface Props {
  sectionTitle?: boolean;
  light?: boolean;
}

export const Subline = styled.div<Props>`
  font-size: ${(props) => props.theme.fontSize.small};
  ${(props) => props.light && `color: ${rgba(props.theme.colors.white, 0.7)};`}
  ${(props) => props.sectionTitle && 'text-align: center;'}
`;
