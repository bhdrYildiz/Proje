import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./pages/Main";
import RezInfo from "./pages/rezInfo";
import Rooms from "./pages/Rooms";
import Rezervation from "./pages/Rezervation";
import Management from "./pages/Management";
import Availability from "./pages/Availability";
import Dashboard from "./pages/Dashboard";

function App() {
  const [selectedReservation, setSelectedReservation] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/main/*"
        element={
          <Main
            selectedReservation={selectedReservation}
            setSelectedReservation={setSelectedReservation}
          />
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="rooms" element={<Rooms />} />
        <Route
          path="rezervation"
          element={
            <Rezervation setSelectedReservation={setSelectedReservation} />
          }
        />
        <Route path="management" element={<Management />} />
        <Route path="availability" element={<Availability />} />
        <Route
          path="rezInfo"
          element={<RezInfo reservation={selectedReservation} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
