import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import CreateEventPage from "./pages/CreateEventPage/CreateEventPage";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateEventPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
