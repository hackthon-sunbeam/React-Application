import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { createContext, useState } from "react";

import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import UserLayout from "./components/UserLayout";
import UserDashboard from "./components/UserDashboard";


export const AuthContext = createContext();

function getUserFromSessionStorage() {
	const userJson = sessionStorage.getItem("user");
	const user = JSON.parse(userJson);
	return user;
}


function App() {

  const [user, setUser] = useState(getUserFromSessionStorage());

  return (
    <div className="container">
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes>
          {/* /url */}
          <Route index="true" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          {/* /user/url */}
					<Route path="/user" element={<UserLayout />}>
						<Route index="true" element={<UserDashboard />} />

          </Route>
        </Routes>
      </AuthContext.Provider>
    </div>
  )
}

export default App
