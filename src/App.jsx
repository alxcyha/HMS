import AppRoute from './components/routes/AppRoute';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function App() {

  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#2e7d32"
      }
    }
  });

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <AppRoute />
      </ThemeProvider>
    </>
  );
}