import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { render } from "react-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/auth/Login.component";
import Messenger from "./components/messenger/Messenger";
import { userJoin } from "./components/messenger/Utils/socketClient";
import NavBar from "./components/navBar/NavBar";
import NotFoundPage from "./components/NotFoundPage";
import { publicRequest } from "./requestMethods";
import { FAILURE_LOGIN, SUCCESS_LOGIN } from "./store/auth.store/authSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { LoginData, User } from "./Types/Types";

function App() {
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector((state) => state.entities.auth.isFetching);
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await publicRequest.get<LoginData>("/auth/login/success");
        if (res.data.success && res.data.user) {
          dispatch(SUCCESS_LOGIN(res.data.user));
          setUser(res.data.user);
          userJoin(res.data.user);
        } else {
          dispatch(FAILURE_LOGIN("Error"));
        }
      } catch (error: any) {
        dispatch(FAILURE_LOGIN(error.message));
      }
    };
    getUser();
  }, []);
  if (isFetching) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  } else
    return (
      <>
        <NavBar user={user} />
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" replace /> : <LoginComponent />}
          />
          <Route
            path="/"
            element={user ? <Messenger /> : <Navigate to="/login" replace />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
    );
}

export default App;
