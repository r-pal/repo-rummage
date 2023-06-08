import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { RepoDetail } from "./components/RepoDetail";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#101d42",
    },
    secondary: {
      main: "#b0d0d3",
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#D4EFF3",
    },
  },
  // typography: {
  //   fontFamily: '"Diphylleia", sans-serif',
  // },
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:owner/:repo" element={<RepoDetail />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
