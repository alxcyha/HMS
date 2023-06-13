import AppRoute from './components/routes/AppRoute';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function App() {

  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#0d6efd"
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