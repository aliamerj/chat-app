import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/auth/Login.component";
import Messenger from "./components/messenger/Messenger.component";
import NavBar from "./components/navBar/NavBar";
import { publicRequest } from "./requestMethods";
export interface User {
  _id: string;
  createdAt: string;
  email: string;
  image: string;
  name: string;
  updatedAt: string;
}
function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await publicRequest.get("/auth/login/success");
        setAuth(res.data.success);
        if (res.data.success) {
          setUser(res.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route
          path="/"
          element={user ? <Messenger user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginComponent />}
        />
      </Routes>
    </>
  );
}

export default App;
