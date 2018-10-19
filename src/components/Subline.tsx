import styled from 'styled-components';

interface Props {
  theme: {
    fontSize: {
      small: number;
    };
    colors: {
      grey: {
        light: string;
      };
    };
  };
  sectionTitle: string;
}

export const Subline: any = styled.div`
  font-size: ${(props: Props) => props.theme.fontSize.small};
  color: ${(props: Props) => props.theme.colors.grey.light};
  ${(props: Props) => props.sectionTitle && 'margin-top: -3rem'};
  ${(props: Props) => props.sectionTitle && 'margin-bottom: 4rem'};
  ${(props: Props) => props.sectionTitle && 'text-align: center'};
`;
