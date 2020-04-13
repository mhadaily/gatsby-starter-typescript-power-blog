import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../config/Theme';
import { GlobalStyle } from '../theme/GlobalStyle';
import { Footer } from './Footer';

import '../style/all.scss';

const Layout = ({ children }: { children: any }) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        {children}
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
};

export { Layout };
