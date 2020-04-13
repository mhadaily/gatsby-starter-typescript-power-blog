import styled from 'styled-components';
import { rgba } from 'polished';

interface Props {
  sectionTitle?: boolean;
}

export const Subline = styled.div<Props>`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => rgba(props.theme.colors.bg, 0.7)};
  ${(props) => props.sectionTitle && 'text-align: center;'}
`;
