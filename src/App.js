import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Screen from "./components/screen.component";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Screen />} />
      </Routes>
    </Router>
  );
}
