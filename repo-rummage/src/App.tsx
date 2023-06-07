import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { RepoDetail } from "./components/RepoDetail";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:owner/:repo" element={<RepoDetail />} />
    </Routes>
  </Router>
);

export default App;
