import { Layout } from "./components";
import {
  HomePage,
  AboutPage,
  ContactPage,
  MyPortfolio,
  ExactProject,
  MyBlog,
  // AdminForm,
  // CommentsPage,
  // Dashboard,
  // AddProjectToPortfolio,
} from "./pages";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutMe" element={<AboutPage />} />
          <Route path="/aboutMe/myBlog" element={<MyBlog />} />
          <Route path="/myPortfolio" element={<MyPortfolio />} />
          <Route path="/myPortfolio/:id" element={<ExactProject />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/admin" element={<AdminForm />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/dashboard/comments" element={<CommentsPage />} />
          <Route path="/admin/dashboard/addProject" element={<AddProjectToPortfolio />} /> */}
          <Route path="*" element={<Navigate to="/" />} />{" "}
        </Routes>
      </Layout>
      <ToastContainer />
    </>
  );
};

export default App;
