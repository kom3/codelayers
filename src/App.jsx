import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// material UI theme
import { createTheme, ThemeProvider } from '@mui/material/styles';

// page components
import Landing from "./pages/landing";
import ViewPage from "./pages/view";

// layout components
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 * Application root. We're using react-router-dom to keep
 * things simple for a static tutorial site. The `Landing`
 * component lists all available tutorials and `ViewPage`
 * shows the content of a selected topic.
 */
function App() {
  // Read CSS variables at runtime and use concrete color values
  // MUI's palette augmentation expects real color values (hex/rgb),
  // so passing `var(...)` directly can cause the "Unsupported `var(...)`" error.
  const getCssVar = (name, fallback) => {
    try {
      if (typeof globalThis !== 'undefined' && typeof globalThis.getComputedStyle === 'function') {
        const v = globalThis.getComputedStyle(document.documentElement).getPropertyValue(name);
        if (v) return v.trim() || fallback;
      }
    } catch (e) {
      // If reading the CSS variable fails, warn once and fall back to the provided color.
      // This should be harmless in SSR or very early envs.
      // eslint-disable-next-line no-console
      console.warn('Could not read CSS variable', name, e);
    }
    return fallback;
  };

  const primaryColor = getCssVar('--color-primary', '#0066cc');
  const secondaryColor = getCssVar('--color-secondary', '#004a99');

  const theme = createTheme({
    palette: {
      primary: { main: primaryColor },
      secondary: { main: secondaryColor },
    },
    typography: {
      fontFamily: 'Roboto, system-ui, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="tutorialhub/" element={<Landing />} />
          <Route path="tutorialhub/:topicId" element={<ViewPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
