import "./index.css";
import Home from "./pages/Home/home.jsx";
import Login from "./pages/Login/login.jsx";
import SignUp from "./pages/SignUp/signup.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";
function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className=" bg-[url('https://i.pinimg.com/564x/99/38/d5/9938d5413831d7e8bb1147c35677de54.jpg')] bg-no-repeat bg-center bg-cover p-4 h-screen flex items-center justify-center ">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
