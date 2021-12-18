import type { NextComponentType } from "next";
import DashboardLayout from "../components/DashboardLayout";
import Home from "../components/Home";

const Dashboard = () => {
  return <Home />;
};

Dashboard.getLayout = (page: NextComponentType) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Dashboard;
