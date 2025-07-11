import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/AuthenticationPages/LoginPage";
import AdminPage from "./Pages/AdminPages/AdminPage";
import FeaturesFE from "./Pages/AdminPages/FeaturesFE";
import TechStack from "./Pages/AdminPages/TechStack";
import FeaturesBE from "./Pages/AdminPages/FeaturesBE";
import Protected from "./Components/Protected";
import UserDetails from "./Pages/AdminPages/UserDetails";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    { path: "/homepage", element:<Protected element={<HomePage />}/> },
    { path: "/adminpage", element: <Protected element={<AdminPage /> }/>,
      children: [
        {
          index: true, // This makes it the default route
          element: <TechStack />
        },
        {path: "featuresfe", element: <FeaturesFE />},
        {path: "featuresbe", element: <FeaturesBE />}, // Assuming FeaturesBE is similar to FeaturesFE
        {path: "techstack", element: <TechStack />}, // Assuming TechStack is similar to FeaturesFE
        {path: "userdetails", element: <UserDetails />}, // Assuming TechStack is similar to FeaturesFE
      ]

    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
