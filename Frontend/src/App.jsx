import TaskCard from "./components/TaskCard.jsx";
import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Counter from "./pages/Counter.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<login />} />
        <Route path="/signup" element={<signup />} />
      </Routes>
    </>
  );
}

export default App;
