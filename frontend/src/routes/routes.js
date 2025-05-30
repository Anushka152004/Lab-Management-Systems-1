import { createBrowserRouter } from "react-router-dom";
//import Homepage from "../screens/Homepage";
import HelloWorld from "../screens/HelloWorld";
import LoginPage from "../screens/Loginpage";
import SignupPage from "../screens/SignupPage";
import Navbar from "../screens/Navbar";
import Floors from "../screens/Floors";
import ITLab01 from "../screens/ITLab01";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/hello-world",
    element: <HelloWorld />,
  },
  {
    path: "/Signup",
    element: <SignupPage />,
  },
  {
    path: "/Navbar",
    element: <Navbar />,
  },
  {
    path: "/Floors",
    element: <Floors />,
  },
  {
    path: "/ITLab01",
    element: <ITLab01 />,
  },
]);

export default router;
