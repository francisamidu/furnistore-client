import { NextComponentType } from "next";
import { DashboardLayout, DashboardHome as Home } from "../../components";
import { extractAuthData } from "../../helpers";
import { useAppSelector } from "../../hooks";

const Dashboard = () => {
  return <Home />;
};

Dashboard.getLayout = (page: NextComponentType) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Dashboard;
