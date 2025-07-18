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
import Features from "./Pages/Features";
import JobTracker from "./Pages/JobTracker/JobTracker";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/homepage", element: <Protected element={<HomePage />} /> },
    { path: "/features", element: <Protected element={<Features />} /> },
    { path: "/jobtracker", element: <Protected element={<JobTracker />} /> },
    {
      path: "/adminpage", element: <Protected element={<AdminPage />} />,
      children: [
        {
          index: true, // This makes it the default route
          element: <TechStack />
        },
        { path: "featuresfe", element: <FeaturesFE /> },
        { path: "featuresbe", element: <FeaturesBE /> }, // Assuming FeaturesBE is similar to FeaturesFE
        { path: "techstack", element: <TechStack /> }, // Assuming TechStack is similar to FeaturesFE
        { path: "userdetails", element: <UserDetails /> }, // Assuming TechStack is similar to FeaturesFE
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
