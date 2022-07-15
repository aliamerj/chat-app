import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/auth/Login.component";
import Messenger from "./components/messenger/Messenger";
import { userJoin } from "./components/messenger/Utils/socketClient";
import NavBar from "./components/navBar/NavBar";
import { publicRequest } from "./requestMethods";
import { FAILURE_LOGIN, SUCCESS_LOGIN } from "./store/auth.store/authSlice";
import { useAppDispatch } from "./store/hooks";
import { LoginData, User } from "./Types/Types";

function App() {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await publicRequest.get<LoginData>("/auth/login/success");
        if (res.data.success && res.data.user) {
          dispatch(SUCCESS_LOGIN(res.data.user));
          setUser(res.data.user);
          userJoin(res.data.user);
        }
      } catch (error: any) {
        dispatch(FAILURE_LOGIN(error.response.data));
      }
    };
    getUser();
  }, [dispatch]);

  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route
          path="/"
          element={user ? <Messenger /> : <Navigate to="/login" />}
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
