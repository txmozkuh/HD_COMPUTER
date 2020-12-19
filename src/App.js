import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { useSelector } from 'react-redux';

const App = () => {
  // const isLogged = useSelector((state) => state.user.isLogged);
  const routing = useRoutes(routes());

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
};

export default App;
