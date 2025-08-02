import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#008745',     // blue
        contrastText: '#fff',
      },
      // secondary: {
      //   main: '#9c27b0',     // purple
      //   contrastText: '#fff',
      // },
      // error: {
      //   main: '#f44336',     // red
      //   contrastText: '#fff',
      // },
      // warning: {
      //   main: '#ff9800',     // orange
      //   contrastText: '#000',
      // },
      // info: {
      //   main: '#2196f3',     // light blue
      //   contrastText: '#fff',
      // },
      // success: {
      //   main: '#4caf50',     // green
      //   contrastText: '#fff',
      // },
      // background: {
      //   default: '#f5f5f5',
      //   paper: '#fff',
      // },
    },
    typography: {
      fontFamily: `"Inter", sans-serif`,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} /> 
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
