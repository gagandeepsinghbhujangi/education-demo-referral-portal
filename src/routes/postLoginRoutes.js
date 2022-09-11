import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Dashboard from "../views/PostLogin/Dashboard";
import DashboardSearch from "../views/PostLogin/DashboardSearch";
import MyReferrals from "../components/myReferrals";
import ImportReferrals from "../components/importReferrals";
import Footer from "../components/footer";
import { useAuthentication } from "../authentication";
import projectConfig from "../config/page/project"

const PostLoginRoutes = () => {
  const navigate = useNavigate();
  const { isUserSignedIn } = useAuthentication();
  const { isLoader } = projectConfig; // To enable and disable loader
  let match = useLocation();
  useEffect(() => {
    if (match.pathname === "/") {
      if (isUserSignedIn()) {
        navigate("/myreferrals");
      } else {
        navigate("/login");
      }
    }
  }, []);
  return (
    <>
      <div className="appWrapper">
        <Routes>
          <Route path="*" element={<MyReferrals isLoader={isLoader} />} />
          <Route path="/myreferrals" element={<MyReferrals isLoader={isLoader} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboardSearch" element={<DashboardSearch />} />
          <Route path="/referrals" element={<ImportReferrals />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default PostLoginRoutes;
