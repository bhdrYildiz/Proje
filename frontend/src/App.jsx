import { useState } from "react";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import RezInfo from "./pages/rezInfo";
import Rooms from "./pages/Rooms";
import Rezervation from "./pages/Rezervation";
import Management from "./pages/Management";
import Availability from "./pages/Availability";

function App() {
  const [selectedReservation, setSelectedReservation] = useState(null);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/dashboard/*"
          element={
            <Dashboard setSelectedReservation={setSelectedReservation} />
          }
        >
          <Route path="rooms" element={<Rooms />} />
          <Route
            path="rezervation"
            element={
              <Rezervation
                onSelect={(reservation) => setSelectedReservation(reservation)}
              />
            }
          />
          <Route path="management" element={<Management />} />
          <Route path="availability" element={<Availability />} />
        </Route>
        <Route
          path="/rezInfo"
          element={<RezInfo reservation={selectedReservation} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
