import TaskCard from "./components/TaskCard.jsx";
import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Counter from "./pages/Counter.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./components/Footer.jsx";
import TaskDetails from "./components/TaskDetails.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
