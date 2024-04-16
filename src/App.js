import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound'
import BuildPage from './pages/BuildPage';
import CreateProjectPage from './pages/CreateProjectPage';
import ServicesPage from './pages/ServicesPage';
import ContactusPage from './pages/ContactusPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MyProjectsPage from './pages/MyProjectsPage';
import ForgetUsernamePage from './pages/ForgetUsernamePage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import PoliciesPage from './pages/PoliciesPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/projects",
    element: <MyProjectsPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/build",
    element: <BuildPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/create-project",
    element: <CreateProjectPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/services",
    element: <ServicesPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/policies",
    element: <PoliciesPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/contact-us",
    element: <ContactusPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/fg-usr",
    element: <ForgetUsernamePage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "/fg-psw",
    element: <ForgetPasswordPage/>,
    errorElement: <PageNotFound/>,
  },
  {
    path: "*",
    element: <PageNotFound/>,
    errorElement: <PageNotFound/>,
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
